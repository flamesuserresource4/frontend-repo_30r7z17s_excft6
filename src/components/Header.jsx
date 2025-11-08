import { Users } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-blue-600 text-white grid place-items-center shadow-sm">
            <Users className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-sm font-semibold tracking-wide text-gray-900">Critical Tech Analysis</h1>
            <p className="text-xs text-gray-500">Power dynamics of social platforms</p>
          </div>
        </div>
        <a
          href="#analysis"
          className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
        >
          Jump to analysis
        </a>
      </div>
    </header>
  );
}
