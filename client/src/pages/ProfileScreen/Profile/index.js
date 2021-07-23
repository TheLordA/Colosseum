import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import {
	Container,
	Inner,
	Title,
	List,
	User,
	Avatar,
	AvatarEditOverlay,
	Name,
	Button,
	Panel,
	IconButton,
	AvatarGrid,
	AvatarHeader,
	AvatarHeaderPanel,
} from "./styles";

function Profiles({ children, ...restProps }) {
	return (
		<Container {...restProps}>
			<Inner>{children}</Inner>
		</Container>
	);
}

Profiles.Title = function ProfilesTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Profiles.List = function ProfilesList({ children, ...restProps }) {
	return <List {...restProps}>{children}</List>;
};

Profiles.User = function ProfilesUser({ children, ...restProps }) {
	return <User {...restProps}>{children}</User>;
};

Profiles.Avatar = function ProfilesAvatar({ src, ...restProps }) {
	return <Avatar src={`/images/avatars/${src}`} {...restProps} />;
};

Profiles.AvatarGrid = function ProfilesAvatarGrid({ children, ...restProps }) {
	return <AvatarGrid {...restProps}>{children}</AvatarGrid>;
};

Profiles.AvatarHeader = function ProfilesAvatarHeader({ children, ...restProps }) {
	return <AvatarHeader {...restProps}>{children}</AvatarHeader>;
};

Profiles.AvatarHeaderPanel = function ProfilesAvatarHeaderPanel({ children, ...restProps }) {
	return <AvatarHeaderPanel {...restProps}>{children}</AvatarHeaderPanel>;
};

Profiles.AvatarEditOverlay = function ProfilesAvatarEditOverlay({ isAdd, ...restProps }) {
	return <AvatarEditOverlay {...restProps}>{isAdd ? <AddIcon /> : <EditIcon />}</AvatarEditOverlay>;
};

Profiles.Name = function ProfilesName({ children, ...restProps }) {
	return <Name {...restProps}>{children}</Name>;
};

Profiles.IconButton = function ProfilesIconButton({ onClick, ...restProps }) {
	return (
		<IconButton {...restProps}>
			<EditIcon onClick={onClick} />
		</IconButton>
	);
};

Profiles.Button = function ProfilesButton({ children, ...restProps }) {
	return <Button {...restProps}>{children}</Button>;
};

Profiles.Panel = function ProfilesPanel({ children, ...restProps }) {
	return <Panel {...restProps}>{children}</Panel>;
};

export default Profiles;
