// urlを取得
var url = location.href;
console.log(url);

const baseUrl = url + 'api/employee';
console.log(baseUrl);

const employee = {};

//List一覧表示
//Main.js/await employeeServices.income()でアクセス
employee.income = async (data) => {
  const urlList = baseUrl+"/income"
  const res = await axios.post(urlList,data)
  .then(response=>{ return response.data; })
  .catch(error=>{ return error; })
  return res;
}

//Main.js/await employeeServices.expense()でアクセス
employee.expense = async (data) => {
  const urlList = baseUrl+"/expense"
  const res = await  axios.post(urlList,data)
  .then(response=>{ return response.data; })
  .catch(error=>{ return error; })
  return res;
}

//Formのcreateaction定義
//await employeeServices.incomesave(data)でアクセス
employee.incomesave = async (data) => {
  const urlSave = baseUrl+"/incomecreate"
  const res = await axios.post(urlSave,data)
  .then(response=>{ return response.data; })
  .catch(error=>{ return error; })
  return res;
}

//await employeeServices.expensesave(data)でアクセス
employee.expensesave = async (data) => {
  const urlSave = baseUrl+"/expensecreate"
  const res = await axios.post(urlSave,data)
  .then(response=>{ return response.data; })
  .catch(error=>{ return error; })
  return res;
}


employee.incomedelete = async (id) => {
  console.log('expense/test!!');
  const urlDelete = baseUrl+"/incomedelete/"+id
  const res = await axios.delete(urlDelete)
  .then(response=>{ return response.data; })
  .catch(error=>{ return error; })
  return res;
}

employee.expensedelete = async (id) => {
  console.log('expense/test!!');
  const urlDelete = baseUrl+"/expensedelete/"+id
  const res = await axios.delete(urlDelete)
  .then(response=>{ return response.data; })
  .catch(error=>{ return error; })
  return res;
}


export default employee