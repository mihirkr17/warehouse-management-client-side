import { useEffect, useState } from "react";

export const useApiGetAll = (url) => {
   const [info, setInfo] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         const response = await fetch(url);
         const data = await response.json();
         if (data) {
            setInfo(data);
         }
      }
      fetchData();
   }, [url]);
   return info;
}

export const useApiGetOne = (url) => {
   const [info, setInfo] = useState({});

   useEffect(() => {
      (async () => {
         const response = await fetch(url);
         const data = await response.json();
         setInfo(data);
      })();
   }, [url]);
   return info;
}