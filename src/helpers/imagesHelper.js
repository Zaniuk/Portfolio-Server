const tinify = require("tinify");
const optimize = async (img) => {
  tinify.key = process.env.TINIFY_API_KEY;
  const pre = image.split('base64,')[0];
  const uri = image.split(';base64,').pop()
  const buf = Buffer.from(uri, 'base64');
  const source = tinify.fromBuffer(buf);
  const result = await source.toBuffer();
  console.log(pre)
  return `${pre}base64,${result.toString('base64')}`;
};


module.exports = {
  optimize,
};