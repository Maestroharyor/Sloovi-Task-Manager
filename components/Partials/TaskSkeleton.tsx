import React from "react";

// Components
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

type Props = {};

const TaskSkeleton = (props: Props) => {
  return (
    <div className="border border-gray-300 p-5 bg-gray-200">
      <SkeletonCircle size="10" />
      <SkeletonText mt="4" noOfLines={4} spacing="4" />
    </div>
  );
};

export default TaskSkeleton;
