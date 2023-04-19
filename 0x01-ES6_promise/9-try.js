export default async function guardrail(mathFunction) {
  const res = [];
  try {
    const result = mathFunction();
    res.push(result);
  }catch (err) {
    res.push(err.message);
  }finally {
    res.push('Guardrail was processed');
  }
  return res;
}
