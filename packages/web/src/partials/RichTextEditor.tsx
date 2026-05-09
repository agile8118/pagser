import React, { useRef, useState, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { request, UploaderAPI } from "@pagser/common";

interface Props {
  content: string;
  onChange: (html: string) => void;
  onBlur?: () => void;
  pageId?: string;
  placeholder?: string;
}

const RichTextEditor = ({
  content,
  onChange,
  onBlur,
  pageId,
  placeholder,
}: Props) => {
  const [isDark, setIsDark] = useState(localStorage.getItem("theme") === "dark");
  const currentContent = useRef(content);

  useEffect(() => {
    const handler = (e: Event) => {
      setIsDark((e as CustomEvent).detail === "dark");
    };
    window.addEventListener("pagser:themechange", handler);
    return () => window.removeEventListener("pagser:themechange", handler);
  }, []);

  const imagesUploadHandler = async (blobInfo: any): Promise<string> => {
    const file: File = blobInfo.blob();
    try {
      const res = await request.post<UploaderAPI.UploadBodyImageResponse>(
        `/pages/${pageId}/body-image`,
        file,
        { auth: true, contentType: file.type, alert: false },
      );
      return res.url;
    } catch (err: any) {
      throw err?.message || "Image upload failed.";
    }
  };

  return (
    <Editor
      key={isDark ? "dark" : "light"}
      tinymceScriptSrc="/tinymce/tinymce.min.js"
      initialValue={currentContent.current}
      onEditorChange={(value) => onChange(value)}
      onBlur={() => onBlur?.()}
      init={{
        base_url: "/tinymce",
        suffix: ".min",
        skin: isDark ? "oxide-dark" : "oxide",
        content_css: isDark ? "dark" : "default",
        height: 420,
        menubar: false,
        statusbar: false,
        branding: false,
        resize: false,
        plugins: [
          "advlist",
          "lists",
          "link",
          "image",
          "codesample",
          // "wordcount",
          "autolink",
        ],
        toolbar:
          "blocks | bold italic underline | alignleft aligncenter alignright | bullist numlist | codesample link image | indent outdent",
        block_formats: "Heading=h2; Subheading=h3; Paragraph=p;",
        codesample_global_prismjs: true,
        codesample_languages: [
          { text: "Plain text", value: "none" },
          { text: "JavaScript", value: "javascript" },
          { text: "TypeScript", value: "typescript" },
          { text: "Python", value: "python" },
          { text: "HTML", value: "markup" },
          { text: "CSS", value: "css" },
          { text: "Bash/Shell", value: "bash" },
          { text: "JSON", value: "json" },
          { text: "SQL", value: "sql" },
          { text: "Go", value: "go" },
          { text: "Rust", value: "rust" },
          { text: "Java", value: "java" },
          { text: "C++", value: "cpp" },
          { text: "PHP", value: "php" },
        ],
        image_dimensions: false,
        images_upload_handler: pageId ? imagesUploadHandler : undefined,
        paste_data_images: false,
        link_default_target: "_blank",
        link_assume_external_targets: true,
        placeholder: placeholder || "Write your page content here...",
        content_style: isDark
          ? "body { font-family: Lato, Helvetica, Arial, sans-serif; font-size: 16px; color: #e4e4e5; line-height: 1.75; }"
          : "body { font-family: Lato, Helvetica, Arial, sans-serif; font-size: 16px; color: #555; line-height: 1.75; }",
      }}
    />
  );
};

export default RichTextEditor;
