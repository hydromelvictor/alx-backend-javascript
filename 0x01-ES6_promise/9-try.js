export default async function guardrail(mathFunction) {
    const res = [];
  try {
    const res = await mathFunction();
    res.push(res);
  }catch (err) {
    res.push(errr.messages);
  }finally {
    res.push('Guardrail was processed');
  }
  return res;
}
