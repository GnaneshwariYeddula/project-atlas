"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownMessageProps {
  content: string;
}

export default function MarkdownMessage({
  content,
}: MarkdownMessageProps) {
  return (
    <div className="prose prose-stone max-w-none text-[15px] leading-7">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="mb-4 mt-1 text-2xl font-black text-stone-900">
              {children}
            </h1>
          ),

          h2: ({ children }) => (
            <h2 className="mb-3 mt-6 text-xl font-bold text-stone-900">
              {children}
            </h2>
          ),

          h3: ({ children }) => (
            <h3 className="mb-2 mt-5 text-lg font-bold text-stone-900">
              {children}
            </h3>
          ),

          p: ({ children }) => (
            <p className="mb-4 last:mb-0 text-stone-700">
              {children}
            </p>
          ),

          strong: ({ children }) => (
            <strong className="font-bold text-stone-900">
              {children}
            </strong>
          ),

          em: ({ children }) => (
            <em className="italic text-stone-700">
              {children}
            </em>
          ),

          ul: ({ children }) => (
            <ul className="mb-4 ml-5 list-disc space-y-2 text-stone-700">
              {children}
            </ul>
          ),

          ol: ({ children }) => (
            <ol className="mb-4 ml-5 list-decimal space-y-2 text-stone-700">
              {children}
            </ol>
          ),

          li: ({ children }) => (
            <li className="pl-1">
              {children}
            </li>
          ),

          blockquote: ({ children }) => (
            <blockquote className="my-4 border-l-4 border-indigo-500 bg-indigo-50 px-4 py-3 text-stone-700">
              {children}
            </blockquote>
          ),

          hr: () => (
            <hr className="my-6 border-stone-200" />
          ),

          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-indigo-700 underline decoration-indigo-300 underline-offset-2 hover:text-indigo-800"
            >
              {children}
            </a>
          ),

          code: ({
            className,
            children,
            ...props
          }) => {
            const isBlock = Boolean(className);

            if (isBlock) {
              return (
                <pre className="my-4 overflow-x-auto rounded-xl bg-stone-950 p-4 text-sm text-stone-100">
                  <code {...props}>
                    {children}
                  </code>
                </pre>
              );
            }

            return (
              <code
                {...props}
                className="rounded bg-stone-100 px-1.5 py-0.5 font-mono text-sm text-indigo-700"
              >
                {children}
              </code>
            );
          },

          table: ({ children }) => (
            <div className="my-5 overflow-x-auto rounded-xl border border-stone-200">
              <table className="min-w-full border-collapse text-sm">
                {children}
              </table>
            </div>
          ),

          thead: ({ children }) => (
            <thead className="bg-stone-100">
              {children}
            </thead>
          ),

          th: ({ children }) => (
            <th className="border-b border-stone-200 px-4 py-3 text-left font-bold text-stone-900">
              {children}
            </th>
          ),

          td: ({ children }) => (
            <td className="border-b border-stone-100 px-4 py-3 text-stone-700">
              {children}
            </td>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}