import {
  SelectTrigger,
  Select,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../components/ui/select";
function SelectText({ placeholder }) {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </SelectContent>
    </Select>
  );
}

export default SelectText;
