import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetCreatorCourseQuery } from "@/features/api/courseApi";
import { Edit } from "lucide-react";
import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import {toast} from "sonner";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

const CourseTable = () => {
  const { data, isLoading, refetch } = useGetCreatorCourseQuery();
  const navigate = useNavigate();

  useEffect(() => {
    refetch();
  }, [refetch]);

  const createCourseHandler = async () => {
    navigate("create");

    // Wait for a short delay before refetching to ensure data is updated
    setTimeout(() => {
      refetch();
      toast.success("New course added!", { style: { color: "green" } });
    }, 1000);
  };

  if (isLoading) return <h1>Loading...</h1>;
  console.log("data ->", data);
  return (
    <div className="mt-10">
      <Button className="mb-2" onClick={createCourseHandler}>Create a new course</Button>
      <Table>
        <TableCaption className="text-black font-bold">A list of recent courses.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] font-bold text-black">Price</TableHead>
            <TableHead className="text-black font-bold">Status</TableHead>
            <TableHead className="text-black font-bold">Title</TableHead>
            <TableHead className="text-right font-bold text-black">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.courses.map((course) => (
            <TableRow key={course._id}>
              <TableCell className="font-medium">
                {course?.coursePrice ? `$${course.coursePrice}` : "NA"}
              </TableCell>

              <TableCell>
                {" "}
                <Badge>{course.isPublished ? "Published" : "Draft"}</Badge>{" "}
              </TableCell>
              <TableCell>{course.courseTitle}</TableCell>
              <TableCell className="text-right">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => navigate(`${course._id}`)}
                >
                  <Edit />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CourseTable;
