
import { useState, useEffect } from "react";
import { Layout } from "@/components/layout";
import { PageHeader } from "@/components/sections/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Trash2, Upload, Lock, Copy, Check } from "lucide-react";
import { toast } from "sonner";

const Admin = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState("");
    const [files, setFiles] = useState<string[]>([]);
    const [uploading, setUploading] = useState(false);
    const [copied, setCopied] = useState<string | null>(null);

    // Check if session is authenticated on load
    useEffect(() => {
        const auth = localStorage.getItem("admin_auth");
        if (auth === "true") {
            setIsAuthenticated(true);
            fetchFiles();
        }
    }, []);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Simple hardcoded password for local protection
        if (password === "admin123") {
            setIsAuthenticated(true);
            localStorage.setItem("admin_auth", "true");
            fetchFiles();
        } else {
            toast.error("Invalid password");
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem("admin_auth");
    };

    const fetchFiles = async () => {
        try {
            const response = await fetch("/api/files");
            if (response.ok) {
                const data = await response.json();
                setFiles(data);
            } else {
                toast.error("Failed to fetch files. Is the local server running?");
            }
        } catch (error) {
            console.error("Error fetching files:", error);
            toast.error("Connection error. Make sure 'npm run server' is running.");
        }
    };

    const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length === 0) return;

        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("image", file);

        setUploading(true);
        try {
            const response = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                toast.success("Image uploaded successfully");
                fetchFiles();
                // Reset input
                e.target.value = "";
            } else {
                toast.error("Upload failed");
            }
        } catch (error) {
            console.error("Upload error:", error);
            toast.error("Upload error");
        } finally {
            setUploading(false);
        }
    };

    const handleDelete = async (fileName: string) => {
        if (!confirm(`Are you sure you want to delete ${fileName}?`)) return;

        try {
            const response = await fetch(`/api/files/${fileName}`, {
                method: "DELETE",
            });

            if (response.ok) {
                toast.success("File deleted successfully");
                fetchFiles();
            } else {
                toast.error("Delete failed");
            }
        } catch (error) {
            console.error("Delete error:", error);
            toast.error("Delete error");
        }
    };

    const copyToClipboard = (fileName: string) => {
        const path = `/src/assets/${fileName}`; // Or /assets/${fileName} depending on build
        // For local dev, we often import. But for the "portal" needing dynamic string paths is tricky in Vite without dynamic import.
        // However, for public access if we move to public folder it's easier.
        // But user asked for src/assets.
        // We'll give the import string suggestion.
        const importStr = `import ${fileName.split('.')[0]} from "@/assets/${fileName}";`;

        // Actually, maybe simple path is what they want
        const textToCopy = fileName;

        navigator.clipboard.writeText(textToCopy);
        setCopied(fileName);
        setTimeout(() => setCopied(null), 2000);
        toast.success("Filename copied!");
    };

    if (!isAuthenticated) {
        return (
            <Layout>
                <div className="min-h-[60vh] flex items-center justify-center container">
                    <Card className="w-full max-w-md">
                        <CardContent className="pt-6">
                            <div className="text-center mb-6">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Lock className="w-6 h-6 text-primary" />
                                </div>
                                <h2 className="text-2xl font-bold">Admin Portal</h2>
                                <p className="text-muted-foreground">Enter password to manage assets</p>
                            </div>
                            <form onSubmit={handleLogin} className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="password">Password</Label>
                                    <Input
                                        id="password"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter password"
                                    />
                                </div>
                                <Button type="submit" className="w-full">Access Portal</Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <PageHeader
                title="Asset Manager"
                subtitle="Upload and manage website images locally"
            />

            <section className="section-padding">
                <div className="container">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-2xl font-bold">Files in src/assets</h2>
                        <div className="flex gap-4">
                            <div className="relative">
                                <input
                                    type="file"
                                    id="file-upload"
                                    className="hidden"
                                    accept="image/*"
                                    onChange={handleUpload}
                                    disabled={uploading}
                                />
                                <Button asChild disabled={uploading} className="cursor-pointer">
                                    <label htmlFor="file-upload">
                                        <Upload className="w-4 h-4 mr-2" />
                                        {uploading ? "Uploading..." : "Upload New Image"}
                                    </label>
                                </Button>
                            </div>
                            <Button variant="outline" onClick={handleLogout}>Logout</Button>
                        </div>
                    </div>

                    {files.length === 0 ? (
                        <div className="text-center py-20 bg-muted/30 rounded-xl">
                            <p className="text-muted-foreground">No images found or server not connected.</p>
                            <p className="text-sm text-muted-foreground mt-2">Make sure 'npm run server' is running.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {files.map((file) => (
                                <Card key={file} className="overflow-hidden group">
                                    <div className="aspect-square relative bg-muted flex items-center justify-center overflow-hidden">
                                        {/* Note: We can't easily display src/assets images dynamically in Vite dev without importing.
                        However, since we are running a local server, we could potentially serve them strictly for preview 
                        via the express server statics? 
                        
                        But standard vite imports work at build time. 
                        
                        Ideally, for a CMS-like experience, assets should be in 'public'.
                        The user specifically asked for 'src/assets'.
                        
                        To preview them, we might need to rely on the backend serving them statically for this dashboard.
                        Let's check if our server serves them. It currently doesn't.
                        
                        I will assume for now we just list names, or I'll add a static serve to the node server for previewing here.
                    */}
                                        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-secondary/20">
                                            <span className="text-xs break-all px-2">{file}</span>
                                        </div>
                                    </div>
                                    <div className="p-3">
                                        <p className="font-medium text-sm truncate mb-3" title={file}>{file}</p>
                                        <div className="flex gap-2 justify-between">
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="w-full"
                                                onClick={() => copyToClipboard(file)}
                                            >
                                                {copied === file ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                                            </Button>
                                            <Button
                                                variant="destructive"
                                                size="sm"
                                                className="w-full"
                                                onClick={() => handleDelete(file)}
                                            >
                                                <Trash2 className="w-3 h-3" />
                                            </Button>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </Layout>
    );
};

export default Admin;
