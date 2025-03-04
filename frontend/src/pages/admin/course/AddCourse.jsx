
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { useCreateCourseMutation } from "@/features/api/courseApi";
// import { Loader2 } from "lucide-react";
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "sonner";

// const AddCourse = () => {
//   const [courseTitle, setCourseTitle] = useState("");
//   const [category, setCategory] = useState("");

//   const [createCourse, { data, isLoading, error, isSuccess }] =
//     useCreateCourseMutation();

//   const navigate = useNavigate();

//   const getSelectedCategory = (value) => {
//     setCategory(value);
//   };

//   const createCourseHandler = async () => {
//     await createCourse({ courseTitle, category });
//   };

//   // for displaying toast
//   useEffect(()=>{
//     if(isSuccess){
//         toast.success(data?.message || "Course created.", {style: {color: "green"}});
//         navigate("/admin/course");
//     }
//   },[isSuccess, error])

//   return (
//     <div className="flex-1 mx-10 mt-10">
//       <div className="mb-4">
//         <h1 className="font-bold text-xl">
//           Lets add course, add some basic course details for your new course
//         </h1>
//         <p className="text-sm">
//           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus,
//           laborum!
//         </p>
//       </div>
//       <div className="space-y-4">
//         <div>
//           <Label>Title</Label>
//           <Input
//             type="text"
//             value={courseTitle}
//             onChange={(e) => setCourseTitle(e.target.value)}
//             placeholder="Your Course Name"
//           />
//         </div>
//         <div>
//           <Label>Category</Label>
//           <Select onValueChange={getSelectedCategory}>
//             <SelectTrigger className="w-[180px]">
//               <SelectValue placeholder="Select a category" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectGroup>
//                 <SelectLabel>Category</SelectLabel>
//                 <SelectItem value="Next JS">Next JS</SelectItem>
//                 <SelectItem value="Data Science">Data Science</SelectItem>
//                 <SelectItem value="Frontend Development">
//                   Frontend Development
//                 </SelectItem>
//                 <SelectItem value="Fullstack Development">
//                   Fullstack Development
//                 </SelectItem>
//                 <SelectItem value="MERN Stack Development">
//                   MERN Stack Development
//                 </SelectItem>
//                 <SelectItem value="Javascript">Javascript</SelectItem>
//                 <SelectItem value="Python">Python</SelectItem>
//                 <SelectItem value="Docker">Docker</SelectItem>
//                 <SelectItem value="MongoDB">MongoDB</SelectItem>
//                 <SelectItem value="HTML">HTML</SelectItem>
//               </SelectGroup>
//             </SelectContent>
//           </Select>
//         </div>
//         <div className="flex items-center gap-2">
//           <Button variant="outline" onClick={() => navigate("/admin/course")}>
//             Back
//           </Button>
//           <Button disabled={isLoading} onClick={createCourseHandler}>
//             {isLoading ? (
//               <>
//                 <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                 Please wait
//               </>
//             ) : (
//               "Create"
//             )}
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddCourse;


import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCreateCourseMutation } from "@/features/api/courseApi";
import { Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const AddCourse = () => {
  const [courseTitle, setCourseTitle] = useState("");
  const [category, setCategory] = useState("");

  const [createCourse, { data, isLoading, error, isSuccess }] =
    useCreateCourseMutation();

  const navigate = useNavigate();

  const getSelectedCategory = (value) => {
    setCategory(value);
  };

  const createCourseHandler = async () => {
    await createCourse({ courseTitle, category });
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(data?.message || "Course created successfully!", {
        style: { color: "green" },
      });
      navigate("/admin/course");
    }
  }, [isSuccess, error]);

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-3xl h-[500px] shadow-xl border rounded-3xl p-6">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Create a New Course
          </CardTitle>
          <CardDescription className="text-gray-500 dark:text-gray-400">
            Fill in the details below to add a new course.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <form className="space-y-6">
            <div className="space-y-2">
              <Label className="text-lg font-medium">Course Title</Label>
              <Input
                type="text"
                value={courseTitle}
                onChange={(e) => setCourseTitle(e.target.value)}
                placeholder="Enter Course Title"
                className="p-3 border rounded-md w-full shadow-sm focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-lg font-medium">Category</Label>
              <Select onValueChange={getSelectedCategory}>
                <SelectTrigger className="w-full p-3 border rounded-md shadow-sm focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Available Categories</SelectLabel>
                    <SelectItem value="Next JS">Next JS</SelectItem>
                    <SelectItem value="Data Science">Data Science</SelectItem>
                    <SelectItem value="Frontend Development">
                      Frontend Development
                    </SelectItem>
                    <SelectItem value="Fullstack Development">
                      Fullstack Development
                    </SelectItem>
                    <SelectItem value="MERN Stack Development">
                      MERN Stack Development
                    </SelectItem>
                    <SelectItem value="Javascript">Javascript</SelectItem>
                    <SelectItem value="Python">Python</SelectItem>
                    <SelectItem value="Docker">Docker</SelectItem>
                    <SelectItem value="MongoDB">MongoDB</SelectItem>
                    <SelectItem value="HTML">HTML</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={() => navigate("/admin/course")}
                className="w-1/3"
              >
                Back
              </Button>
              <Button
                disabled={isLoading}
                onClick={createCourseHandler}
                className="w-2/5 bg-blue-600 hover:bg-blue-700 text-white"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Please wait...
                  </>
                ) : (
                  "Create Course"
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddCourse;

