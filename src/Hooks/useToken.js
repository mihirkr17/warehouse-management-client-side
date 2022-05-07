import { useEffect, useState } from "react";

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