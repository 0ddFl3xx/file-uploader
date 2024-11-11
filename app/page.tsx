import { Dropzone } from "./components/Dropzone";

export default function Home() {
  return (
    <div className="max-w-xl mx-auto min-h-screen w-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold">
        File <span className="text-primary">Uploader</span>
      </h1>
      <p className="text-xl">A file uploader built with Pinata and Next.js</p>
      <ul className="mt-4 list-disc list-inside">
        <li>Upload multiple files at once</li>
        <li>Drag and drop files</li>
        <li>Fast uploads</li>
      </ul>
      <Dropzone />
    </div>
  );
}
