const items = [
  { id: 1, name: "erez" },
  { id: 2, name: "yossi" },
];

exports.handler = async function (event, contex) {
  return {
    statusCode: 200,
    body: JSON.stringify(items),
  };
};
