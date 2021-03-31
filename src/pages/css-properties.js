import React from "react";
import { AnimateSharedLayout, motion } from "framer-motion";

const Box = (props) => <motion.div {...props} />;

const justifyContentValues = [
	"flex-start",
	"center",
	"flex-end",
	"space-between",
	"space-evenly",
	"space-around",
];

const JustifyContent = () => {
	const [childrenCount, setChildrenCount] = React.useState(2);
	const [justifyContent, setJustifyContent] = React.useState("center");
	return (
		<div className="flex mt-8 flex-col">
			<div className="flex justify-between">
				<div className="m-2">Justify Content</div>
				<div className="ml-auto">
					<button
						disabled={childrenCount > 8}
						onClick={() => setChildrenCount((c) => c + 1)}
						className="p-2"
					>
						Add Child
					</button>
					<button
						disabled={childrenCount < 2}
						onClick={() => setChildrenCount((c) => c - 1)}
						className={"p-2"}
					>
						Remove child
					</button>
				</div>
			</div>
			<div className="flex justify-between">
				{justifyContentValues.map((value) => (
					<button className="m-2 p-2" onClick={() => setJustifyContent(value)}>
						{value}
					</button>
				))}
			</div>

			<motion.div
				style={{
					justifyContent: justifyContent,
				}}
				className={`flex p-4 my-4 flex-wrap w-full bg-gradient-to-r from-purple-700 to-purple-800  rounded-lg`}
			>
				{Array.from({ length: childrenCount }).map((child, index) => (
					<Box
						layout
						className={`flex mr-4 rounded-lg items-center justify-center h-full bg-secondary-${
							index + 1
						}00`}
						style={{ width: 200, marginBlockEnd: 20, height: 200 }}
					>
						{index + 1}
					</Box>
				))}
			</motion.div>
		</div>
	);
};

const CSSProperties = () => {
	return (
		<AnimateSharedLayout>
			<JustifyContent />
		</AnimateSharedLayout>
	);
};
export default CSSProperties;
