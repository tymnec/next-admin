import { MdSearch } from "react-icons/md";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const Search = ({ placeholder }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams);

    params.set("page", 1);

    if (e.target.value) {
      e.target.value.length > 2 && params.set("q", e.target.value);
    } else {
      params.delete("q");
    }
    replace(`${pathname}?${params}`);
  }, 300);

  return (
    <div className="flex items-center bg-gray-200 p-2 rounded-lg">
      <MdSearch className="text-gray-500" />
      <input
        type="text"
        placeholder={placeholder}
        className="ml-2 outline-none border-none bg-transparent"
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
