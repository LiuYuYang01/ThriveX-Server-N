export class Result {
  static success<T>(): { code: number; message: string; data: T };
  // 成功响应
  static success<T>(data: T): { code: number; message: string; data: T };
  static success<T>(message: string, data: T): { code: number; message: string; data: T };
  static success<T>(messageOrData?: string | T, data?: T) {
    if (!messageOrData) {
      return {
        code: 200,
        message: "ok",
        data: null
      };
    } else if (typeof messageOrData === "string") {
      return {
        code: 200,
        message: messageOrData,
        data: data || null
      };
    } else {
      return {
        code: 200,
        message: "ok",
        data: messageOrData || null
      };
    }
  }

  // 失败响应
  static error<T>(): { code: number; message: string; data: T };
  static error<T>(data: T): { code: number; message: string; data: T };
  static error<T>(message: string, data: T): { code: number; message: string; data: T };
  static error<T>(messageOrData?: string | T, data?: T) {
    if (!messageOrData) {
      return {
        code: 400,
        message: "no",
        data: null
      };
    } else if (typeof messageOrData === "string") {
      return {
        code: 400,
        message: messageOrData,
        data: data || null
      };
    } else {
      return {
        code: 400,
        message: "no",
        data: messageOrData || null
      };
    }
  }
}