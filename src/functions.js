import { ElLoading } from "element-plus";

export function loadingPage(event, timeOut) {
  const loading = ElLoading.service({
    lock: true,
    text: "",
    background: "rgba(0,0,0,0.7)",
  });
  setTimeout(() => {
    loading.close();    
    if(event) event();
    
  }, timeOut);
}
/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */

