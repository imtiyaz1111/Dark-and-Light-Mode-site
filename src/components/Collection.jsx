import React from "react";

const Collection = () => {
  return (
    <div className="max-w-[1270px] dark:text-white mx-auto py-5">
      <h1 className="text-center font-bold text-4xl">Collection Spotlight</h1>
      <p
        className="text-center text-[
#FFFFFF] py-5"
      >
        Discover extraordinary moments with our Spotlight Collection
        metatickets—exclusive access to premium events for an unforgettable
        experience. Grab yours today!
      </p>
      {/* box */}
      <div className="grid md:grid-col-2  lg:grid-cols-3 py-5 gap-5">
        <div className="box  dark:bg-[#3B3E47]">
          <div className="py-3 px-3">
            <div className="img bg-">
              <img
                src="https://s3-alpha-sig.figma.com/img/bc7b/d2d1/a2c7e5def5b347470305864869a894b6?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YxtMQ-umkbEHlxMyMnstAs6rYbIBMoz6Y6e6X~XvOsr-rAQ2g4qOWln3w~caMGqtbtAtbCjyj-yjVTMTm1mZVFfJBk5KOXa491~GuF-sCId9i622FHtykZ-nY9kpx54GqgSCB2nGFH3HeaHmDDrU0aEinZpFFnqbmnXRqB9agt6U5PFCW70dobn1FS2-uCCVjf-JcgJzpDyt6xoO-4xWk6IWNKkJCo1K7Ad4KoEpKKDiFYyDhsXOKGZrevPj~1tdFMRrtdkTS8ckyL82IMwnzlMMtKVgab1EpeEiBiF-BW88PwJ0towH4BaKyuBx~E-cLgN0lW8hacJNXlAv-u1nFA__"
                alt=""
              />
            </div>
            <div className="content">
              <h1 className="py-3  text-lg text-center font-semibold">
                Sacramento River Cats
              </h1>
              <p className=" text-center py-2 ">OCT 15 |Sun | 4:30PM</p>
              <p className=" text-center py-2 ">
                Las Vegas Ballpark, Las Vegas, Nevada
              </p>
              <div className="py-5 px-5 bg-black">
                <p className="text-center text-white">Take Flight Collection</p>
              </div>
            </div>
          </div>
        </div>
        {/* box */}
        <div className="box bg-[#F9F8FF] dark:bg-[#3B3E47]">
          <div className="py-3 px-3">
            <div className="img bg-">
              <img
                src="https://s3-alpha-sig.figma.com/img/bc7b/d2d1/a2c7e5def5b347470305864869a894b6?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YxtMQ-umkbEHlxMyMnstAs6rYbIBMoz6Y6e6X~XvOsr-rAQ2g4qOWln3w~caMGqtbtAtbCjyj-yjVTMTm1mZVFfJBk5KOXa491~GuF-sCId9i622FHtykZ-nY9kpx54GqgSCB2nGFH3HeaHmDDrU0aEinZpFFnqbmnXRqB9agt6U5PFCW70dobn1FS2-uCCVjf-JcgJzpDyt6xoO-4xWk6IWNKkJCo1K7Ad4KoEpKKDiFYyDhsXOKGZrevPj~1tdFMRrtdkTS8ckyL82IMwnzlMMtKVgab1EpeEiBiF-BW88PwJ0towH4BaKyuBx~E-cLgN0lW8hacJNXlAv-u1nFA__"
                alt=""
              />
            </div>
            <div className="content">
              <h1 className="py-3  text-lg text-center font-semibold">
                Sacramento River Cats
              </h1>
              <p className=" text-center py-2 ">OCT 15 |Sun | 4:30PM</p>
              <p className=" text-center py-2">
                Las Vegas Ballpark, Las Vegas, Nevada
              </p>
              <div className="py-5 px-5 bg-black">
                <p className="text-center text-white">Take Flight Collection</p>
              </div>
            </div>
          </div>
        </div>
        {/* box */}
        <div className="box bg-[#F9F8FF] dark:bg-[#3B3E47]">
          <div className="py-3 px-3">
            <div className="img bg-">
              <img
                src="https://s3-alpha-sig.figma.com/img/3de4/4e83/b6e3aeda879dc6f22f94711c788789b5?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ptz8aSbr1X2gpkQvNp75uy5Qqc3G8thxATUNJrSlH2UpQlPHInbDDZzPDm06nh~Nz5I1JJ4DJV7c8-QhyhII56mMhaJJpXXDp1PCUpSFQ4e8Ye14EdQY91xENMHr1f0JdG2SSkVcxAMgzFhchgpPmcJgVvZX42PQo9HDwrB-Mu9YzL8HDg5lqq592kuVfpcoCk2mmirfFLs7nHYKlxKizeHFC38nNStqJTHYUJHGziz0RNo2oRTX9lYT5MCG0g7fSSu968zB9IjW7Xu5z337Wt3fLdxiQu12YbUec3D-iYVeMH-6xRitiF8XgVwKniDwWIEs6yrvu122pOCHDB~P6g__"
                alt=""
              />
            </div>
            <div className="content">
              <h1 className="py-3  text-lg text-center font-semibold">
                Sacramento River Cats
              </h1>
              <p className=" text-center py-2 ">OCT 15 |Sun | 4:30PM</p>
              <p className=" text-center py-2 ">
                Sutter Health Park, Sacramento, California
              </p>
              <div className="py-5 px-5 bg-black">
                <p className="text-center text-white">Orange Collection</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
