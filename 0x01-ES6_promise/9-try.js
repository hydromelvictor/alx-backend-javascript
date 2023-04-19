export default async function guardrail(mathFunction) {
    const res = [];
  try {
    const res = mathFunction();
    res.push(res);
  }catch (err) {
    res.push(err.message);
  }finally {
    res.push('Guardrail was processed');
  }
  return res;
}
