import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { useEffect, useState } from "react";

export function useCollection() {
  const [data, setData] = useState(null);

  useEffect(() => {
    onSnapshot(collection(db, "foods"), (snapshot) => {
      const allFoods = [];
      console.log(snapshot);
      snapshot.docs.forEach((doc) => {
        allFoods.push({ id: doc.id, ...doc.data() });
      });

      setData(allFoods);
    });

  }, []);

  return { data };
}

