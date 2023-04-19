export default function guardrail(mathFunction) {
  const res = [];
  try {
    const result = mathFunction();
    res.push(result);
  } catch (err) {
    res.push(err.toString());
  } finally {
    res.push('Guardrail was processed');
  }
  return res;
}
