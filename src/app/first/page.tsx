"use client";

const page = () => {
  function createHugeArray(): number[] {
    const hugeArray: number[] = [];
    for (let i = 0; i < 1000000; i++) {
      // Creates a huge array with 1 million elements
      hugeArray.push(i);
    }
    return hugeArray;
  }

  const handleClick = () => {
    createHugeArray();
    console.log("ndn");
  };

  return (
    <div>
      First Page
      <button onClick={handleClick}>button</button>
    </div>
  );
};

export default page;
