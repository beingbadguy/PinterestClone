import { useEffect, useState } from "react";
export const Cards = (props) => {
  let [user, setuser] = useState([]);
  let [value, setvalue] = useState(9);
  let [state, setstate] = useState("Click to load more...");

  let ValueChanger = (e) => {
    value = value + 5;
    setvalue(value);
    // e.preventDefault();
    setstate("Loading...");
  };

  let api = `https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=${value}`;

  const fetchApiKey = async (url) => {
    try {
      const res = await fetch(url);
      let data = await res.json();
      setuser(data.photos);
      ValueChanger();
    } finally {
      // console.log("it has error");
    }

    setstate("Click to load more...");
  };
  useEffect(() => {
    
      fetchApiKey(api);
    
  }, []);

  useEffect(() => {
    return () => {
      fetchApiKey(api);
    };
  }, [state, setvalue]);

  return (
    <div ref={props.cardref}>
      <div id="container" className="flex flex-wrap justify-center items-center  gap-6  mt-[50px] mb-10">
        {user.map((item, index) => (
          <img key={index} src={item.url} className=" h-[400px] w-[150px] sm:h-[300px] sm:w-[300px] md:h-[400px] md:w-[350px]  rounded-2xl object-cover" />
        ))}
      </div>
      <div className="text-center mb-8 hover:border-black">
        <button onClick={ValueChanger} className="bg-black text-white rounded-xl p-2 w-[200px]  hover:border-black">
          {state}
          {/* Click to load more... */}
        </button>
      </div>
    </div>
  );
};
