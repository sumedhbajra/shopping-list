export default function Stats({ totalItem, items }) {
  if (!items.length)
    return (
      <p className="stats">Start adding some items to your packing list 🚀.</p>
    );

  let totalPacked = items.filter((item) => item.packed).length;
  let percentageItem = Math.round((totalPacked / totalItem) * 100);
  return (
    <footer className="stats">
      <em>
        💼 You have {totalItem ? totalItem : "no"} items on your list, and you
        already packed {totalPacked}{" "}
        {percentageItem === 100
          ? ", all Done"
          : `, ${percentageItem}% completed`}
      </em>
    </footer>
  );
}
