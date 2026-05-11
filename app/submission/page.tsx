"use client";

import { Navbar } from "@/components/ui/Navbar";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Upload, File, CheckCircle, AlertCircle, X, Download } from "lucide-react";
import { useState } from "react";

export default function SubmissionPage() {
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState<{ name: string; size: string; status: string }[]>([]);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") setDragActive(true);
    else if (e.type === "dragleave") setDragActive(false);
  };

  const mockUpload = () => {
    setFiles([...files, { name: "Competition_Final_v1.pdf", size: "2.4 MB", status: "Uploading..." }]);
    setTimeout(() => {
      setFiles(prev => prev.map(f => f.name === "Competition_Final_v1.pdf" ? { ...f, status: "Success" } : f));
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        <header className="mb-12">
          <h1 className="text-5xl font-black uppercase tracking-tighter mb-4">
            Upload <span className="text-neo-cyan">Submissions</span>
          </h1>
          <p className="font-bold text-black/60 uppercase tracking-widest text-sm">
            Submit your projects, assets, or documentation
          </p>
        </header>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Upload Zone */}
          <div className="lg:col-span-2 space-y-8">
            <div 
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              className={`border-4 border-dashed border-black p-16 text-center transition-all ${dragActive ? 'bg-neo-yellow/20 scale-[1.01]' : 'bg-neutral-50'}`}
            >
              <Upload className="w-16 h-16 mx-auto mb-6 text-neo-cyan" strokeWidth={3} />
              <h3 className="text-2xl font-black uppercase mb-2">Drag & Drop Files</h3>
              <p className="font-bold text-black/40 mb-8 uppercase text-sm">Supported: PDF, ZIP, PNG, JPG (Max 50MB)</p>
              <Button onClick={mockUpload} size="lg" className="bg-black text-white">Select Files</Button>
            </div>

            <section>
              <h3 className="text-xl font-black uppercase mb-4">Recent Uploads</h3>
              <div className="space-y-4">
                {files.length === 0 ? (
                  <Card variant="white" className="p-8 border-2 text-center opacity-40">
                    <File className="w-12 h-12 mx-auto mb-4" />
                    <p className="font-black uppercase">No files uploaded yet</p>
                  </Card>
                ) : (
                  files.map((file, i) => (
                    <Card key={i} className="p-4 flex items-center justify-between border-2">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-neo-yellow border-2 border-black flex items-center justify-center">
                          <File className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-black text-sm uppercase">{file.name}</p>
                          <p className="text-[10px] font-bold text-black/40">{file.size}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className={`text-[10px] font-black uppercase px-2 py-1 border-2 border-black ${file.status === 'Success' ? 'bg-neo-green' : 'bg-neo-yellow'}`}>
                          {file.status}
                        </span>
                        <button className="text-black/40 hover:text-black transition-colors"><X className="w-5 h-5" /></button>
                      </div>
                    </Card>
                  ))
                )}
              </div>
            </section>
          </div>

          {/* Sidebar: Guidelines */}
          <aside className="space-y-8">
            <Card variant="pink" className="p-8 border-4">
              <h3 className="text-xl font-black uppercase mb-4 flex items-center gap-2">
                <AlertCircle className="w-6 h-6" /> Guidelines
              </h3>
              <ul className="space-y-3 font-bold text-sm">
                <li>• Ensure file name includes Team Name.</li>
                <li>• Max file size is 50MB.</li>
                <li>• Late submissions will not be accepted.</li>
                <li>• One submission per team.</li>
              </ul>
              <Button variant="outline" className="w-full mt-6 bg-white gap-2">
                <Download className="w-4 h-4" /> Download Template
              </Button>
            </Card>

            <Card variant="white" className="p-6 border-2">
               <h3 className="text-sm font-black uppercase opacity-60 mb-4">Submission Status</h3>
               <div className="flex items-center gap-3">
                 <div className="w-3 h-3 bg-neo-green border-2 border-black rounded-full animate-pulse" />
                 <p className="font-black text-xs uppercase text-neo-green">Submission Window Open</p>
               </div>
               <p className="text-[10px] font-bold mt-2 uppercase opacity-40">Closes in: 2 days, 4 hours</p>
            </Card>
          </aside>
        </div>
      </div>

      <footer className="bg-black text-white p-12 text-center border-t-3 border-black mt-20">
        <p className="font-black italic text-2xl uppercase mb-2">EventAir Submission</p>
        <p className="text-xs font-bold opacity-50 uppercase tracking-widest">Quality over quantity</p>
      </footer>
    </main>
  );
}
