const format = (obj: any): any => {
  if (typeof obj === "bigint") {
    return obj.toString();
  } else if (Array.isArray(obj)) {
    return obj.map(format);
  } else if (obj && typeof obj === "object") {
    const serializedObj: any = {};
    for (const key in obj) {
      serializedObj[key] = format(obj[key]);
    }
    return serializedObj;
  }
  return obj;
};

export default format;
