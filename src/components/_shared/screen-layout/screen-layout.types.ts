import { ScrollViewProps } from "react-native";
import { ContainerProps } from "../container/container.types";

export type ScreenLayoutProps = ScrollViewProps &
   {
    keyboardAvoidingView?: boolean;
    backgroundColor?: string;
    containerProps?: Omit<ContainerProps, "style" | "children">;
    scrollViewStyle?: ScrollViewProps["style"];
	 }
