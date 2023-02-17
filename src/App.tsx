import { ReactElement, useState } from "react";
import "./App.css";
import Controls from "./components/Controls";
import HoverableText from "./components/HoverableText";
import MagnifiedText from "./components/MagnifiedText";

export default function App(): ReactElement {
	const [userText, setUserText] = useState<string>("");
	const [radius, setRadius] = useState(3);
	const [fontSize, setFontSize] = useState(42);
	const [hoveredIdx, setHoveredIdx] = useState<number>();

	const text = userText || "The quick brown fox jumped over the lazy dog.";

	const magnifiedText =
		hoveredIdx !== undefined
			? text.slice(Math.max(0, hoveredIdx - radius), hoveredIdx + radius + 1)
			: undefined;

	return (
		<>
			<Controls
				text={userText}
				setText={setUserText}
				radius={radius}
				setRadius={setRadius}
				fontSize={fontSize}
				setFontSize={setFontSize}
			></Controls>
			<div>
				<HoverableText text={text} didHoverIdx={setHoveredIdx} />
			</div>
			{magnifiedText && (
				<div>
					<MagnifiedText text={magnifiedText} fontSize={fontSize} />
				</div>
			)}
		</>
	);
}
