import { signOut } from "firebase/auth";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init";

export const useFetch = (url, dep = undefined, token = undefined) => {
   const [fetchData, setFetchData] = useState(null || {} || [] || "");
   const [fetchLoading, setFetchLoading] = useState(false);
   const [fetchErr, setFetchErr] = useState(null);
   const navigate = useNavigate();

   useEffect(() => {
      let controller = new AbortController();
      const signal = controller.signal;
      (async () => {
         try {
            setFetchLoading(true);
            const response = await fetch(url, { signal } || url, {
               headers: {
                  'authorization': `Bearer ${token}`
               },
               signal: signal
            });

            if (response.status === 403 || response.status === 401) {
               navigate('/login');
               signOut(auth);
            } else {
               setFetchData(await response.json());
            }
         } catch (error) {
            setFetchErr(error);
         } finally {
            setFetchLoading(false);
         }
      })();

      return () => {
         controller?.abort();
      }
   }, [url, dep, token, navigate]);

   return { fetchData, fetchLoading, fetchErr };
}

// message hooks
export const useMessage = () => {
   const [msg, setMsg] = useState('');
   let setMessage;

   setMessage = (message) => {
      setMsg(message);
   }

   useEffect(() => {
      const messageTimeout = setTimeout(() => {
         setMsg("");
      }, 4000);
      return () => clearInterval(messageTimeout);
   }, [msg]);

   return { msg, setMessage };
}


// action handler hooks
export const useAction = () => {
   const [actionErr, setActionErr] = useState(null);

   let setAction;

   setAction = async (url, method, body = undefined, headerType = undefined) => {
      try {
         let response;
         if ((typeof body !== 'undefined') && (typeof headerType !== 'undefined')) {
            response = await fetch(url, {
               method: method,
               headers: {
                  'content-type': headerType
               },
               body: body
            });
         } else {
            response = await fetch(url, {
               method: method
            })
         }

         if (response.ok) {
            const resData = await response.json();
            return resData;
         } else {
            setActionErr("Status error");
         }
      } catch (error) {
         setActionErr(error);
      }
   }

   return { setAction, actionErr }
}

// jwt token 
export const useToken = (user) => {
   const [token, setToken] = useState();

   useEffect(() => {
      (async () => {
         const url = `https://frozen-sea-42906.herokuapp.com/login`;
         const email = user?.user?.email;
         if (email) {
            const response = await fetch(url, {
               method: "POST",
               headers: {
                  'content-type': 'application/json'
               },
               body: JSON.stringify({ email })
            });

            const tokenData = await response.json();
            setToken(tokenData.accessToken);
            localStorage.setItem('accessToken', tokenData.accessToken);
         }
      })();
   }, [user]);

   return [token];
}