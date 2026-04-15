const time = new Date().toLocaleString("en-IN", {
  timeZone: "Asia/Kolkata"});
function Time(){
  return <h3>This is the Current Time: {time}</h3>
}
export default Time;