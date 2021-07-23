import React, { useState, useEffect, useRef, Fragment } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Profiles from "./Profile/index";
import Form from "./Form/index";

function ProfilesContainer() {
	const userDetails = {
		profiles: [
			{ _id: "1", name: "Name 1", avatar: "Avatar_01.png" },
			{ _id: "2", name: "Name 2", avatar: "Avatar_02.png" },
		],
	};
	const [render, setRender] = useState({ type: "default", args: {} });
	const [editingUser, setEditingUser] = useState({});
	const prevDetails = useRef();
	const usedAvatars =
		userDetails && userDetails.profiles ? userDetails.profiles.map(({ avatar }) => avatar) : [];
	const usedNames =
		userDetails && userDetails.profiles ? userDetails.profiles.map(({ name }) => name) : [];

	/*useEffect(() => {
		if (userDetails && (!userDetails.profiles || userDetails.profiles.length === 0))
			setRender({ type: "edit_main", args: {} });
		else setRender({ type: "default", args: {} });
	}, [userDetails]);*/

	const handleSave = () => {
		// TODO : handle saving profile details
	};

	const handleDelete = () => {
		// TODO : handle deleting profile
	};

	const renderAvatars = () => {
		const avatars = [];
		for (let count = 1; count <= 11; count++) {
			const filename = `Avatar_${count < 10 ? "0" + count : count}.png`;
			avatars.push(
				<Profiles.Avatar
					key={`${filename}_grid`}
					src={filename}
					className={usedAvatars.includes(filename) ? "avatar-used" : ""}
					onClick={() => {
						if (!usedAvatars.includes(filename)) {
							setEditingUser((prevValue) => ({ ...prevValue, avatar: filename }));
							setRender({ type: "edit_details", args: {} });
						} else return null;
					}}
				/>
			);
		}
		return avatars;
	};

	const renderSwitch = () => {
		switch (render.type) {
			case "confirm_delete":
				return (
					<Fragment>
						<Profiles.Title>Confirm Deletion</Profiles.Title>
						<Profiles.Panel className="button-area">
							<p>
								Are you sure you want to delete this profile? You will not be able to
								revert this process.
							</p>
							<Profiles.Button
								className="white-btn"
								onClick={() => handleDelete(render.args.profileId)}
							>
								YES
							</Profiles.Button>
							<Profiles.Button
								onClick={() => setRender({ type: "edit_details", args: {} })}
							>
								CANCEL
							</Profiles.Button>
						</Profiles.Panel>
					</Fragment>
				);
			case "edit_avatar":
				return (
					<Fragment>
						<Profiles.AvatarHeader>
							<Profiles.AvatarHeaderPanel className="profile-title">
								<Profiles.AvatarHeaderPanel>
									<ArrowBackIcon
										onClick={() =>
											setRender({ type: "edit_details", args: {} })
										}
									/>
								</Profiles.AvatarHeaderPanel>
								<Profiles.AvatarHeaderPanel>
									<Profiles.Title>Edit Profile</Profiles.Title>
									<p>Choose a profile icon.</p>
								</Profiles.AvatarHeaderPanel>
							</Profiles.AvatarHeaderPanel>
							<Profiles.AvatarHeaderPanel className="profile-previous">
								<p>
									{(prevDetails.current && prevDetails.current.name) ||
										(editingUser && editingUser.name)}
								</p>
								<Profiles.Avatar
									src={
										(prevDetails.current && prevDetails.current.avatar) ||
										(editingUser && editingUser.avatar)
									}
								/>
							</Profiles.AvatarHeaderPanel>
						</Profiles.AvatarHeader>
						<Profiles.AvatarGrid>{renderAvatars()}</Profiles.AvatarGrid>
					</Fragment>
				);
			case "edit_details":
				return (
					<Fragment>
						<Profiles.Title>Edit Profile</Profiles.Title>
						{editingUser && setEditingUser && (
							<Fragment>
								<Profiles.Panel>
									<Profiles.Avatar src={editingUser.avatar} />
									<Profiles.IconButton
										onClick={() => setRender({ type: "edit_avatar", args: {} })}
									/>
									<Form.Input
										placeholder="Display Name"
										value={editingUser.name}
										onChange={({ target }) => {
											setEditingUser((prevValue) => ({
												...prevValue,
												name: target.value,
											}));
										}}
									/>
									{!editingUser._id && usedNames.includes(editingUser.name) && (
										<Form.Error>Name is already taken.</Form.Error>
									)}
								</Profiles.Panel>
								<Profiles.Panel className="button-area">
									<Profiles.Button
										className="white-btn"
										onClick={() => handleSave()}
										disabled={
											!editingUser.name ||
											editingUser.avatar === "Placeholder.png" ||
											(!editingUser._id &&
												usedNames.includes(editingUser.name))
										}
									>
										SAVE
									</Profiles.Button>
									<Profiles.Button
										onClick={() => {
											setEditingUser(null);
											setRender({ type: "default", args: {} });
										}}
									>
										CANCEL
									</Profiles.Button>
									{editingUser._id && (
										<Profiles.Button
											onClick={() =>
												setRender({
													type: "confirm_delete",
													args: { profileId: editingUser._id },
												})
											}
										>
											DELETE PROFILE
										</Profiles.Button>
									)}
								</Profiles.Panel>
							</Fragment>
						)}
					</Fragment>
				);
			default:
				return (
					<Fragment>
						<Profiles.Title>
							{render.type === "edit_main" ? "Manage Profiles:" : "Who's watching ?"}
						</Profiles.Title>
						{userDetails && userDetails.profiles && (
							<Profiles.List>
								{userDetails.profiles.map((profile) => (
									<Profiles.User
										key={profile._id}
										onClick={() => {
											if (render.type === "edit_main") {
												prevDetails.current = profile;
												setEditingUser(profile);
												setRender({ type: "edit_details", args: {} });
											}
											// else setProfile(profile);
										}}
									>
										{render.type === "edit_main" && (
											<Profiles.AvatarEditOverlay />
										)}
										<Profiles.Avatar src={profile.avatar} />
										<Profiles.Name>{profile.name}</Profiles.Name>
									</Profiles.User>
								))}
								{render.type === "edit_main" && userDetails.profiles.length < 5 && (
									<Profiles.User
										className="add-profile"
										onClick={() => {
											setEditingUser({
												avatar: "Placeholder.png",
												name: "",
											});
											setRender({ type: "edit_details", args: {} });
										}}
									>
										<Profiles.AvatarEditOverlay isAdd />
										<Profiles.Avatar src="Placeholder.png" />
										<Profiles.Name>Add Profile</Profiles.Name>
									</Profiles.User>
								)}
							</Profiles.List>
						)}

						{render.type === "edit_main" ? (
							<Profiles.Button
								className="white-btn"
								onClick={() => setRender({ type: "default", args: {} })}
							>
								DONE
							</Profiles.Button>
						) : (
							<Profiles.Button
								onClick={() => setRender({ type: "edit_main", args: {} })}
							>
								MANAGE PROFILES
							</Profiles.Button>
						)}
					</Fragment>
				);
		}
	};

	return (
		<Fragment>
			{/* <HeaderContainer logoOnly /> */}
			<Profiles>{renderSwitch()}</Profiles>
		</Fragment>
	);
}

export default ProfilesContainer;
