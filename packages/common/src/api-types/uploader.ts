export namespace UploaderAPI {
  // PUT /api/pages/:id/photo
  export interface UploadPagePhotoResponse { message: string; image: string; }

  // POST /api/pages/:id/attach-files
  export interface UploadAttachFileResponse { message: string; }
}
