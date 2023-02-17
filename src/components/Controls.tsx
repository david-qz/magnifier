import { ReactElement } from "react";
import css from "./Controls.module.css";

type Props = {
	text: string;
	setText: (text: string) => void;
	radius: number;
	setRadius: (radius: number) => void;
	fontSize: number;
	setFontSize: (px: number) => void;
};

export default function Controls({
	text,
	setText,
	radius,
	setRadius,
	fontSize,
	setFontSize,
}: Props): ReactElement {
	return (
		<div className={css.container}>
			<label className={css.label}>
				Text:
				<input value={text} onChange={(e) => setText(e.target.value)} />
			</label>
			<label className={css.label}>
				Radius:
				<input
					value={radius}
					onChange={(e) => setRadius(Number(e.target.value))}
					type="number"
					min={0}
					max={10}
				/>
			</label>
			<label className={css.label}>
				Font Size:
				<input
					value={fontSize}
					onChange={(e) => setFontSize(Number(e.target.value))}
					type="number"
					min={0}
					max={100}
				/>
			</label>
		</div>
	);
}
