import Link from "next/link";


const Navlink = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/categories",
  );
  const data = await res.json();


  return (
    <div className="flex gap-7 absolute left-96 mt-6">
      {data.map((data, i) => (
        <Link href={data.slug} key={i}>
          <span>{data.icon}</span> <span>{data.nameBn}</span>
        </Link>
      ))}
    </div>
  );
};

export default Navlink;
