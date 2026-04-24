// Central icon components using public/assets/icons/*.svg
// Usage: import { HomeIcon } from "../components/Icons"

const BASE = "/assets/icons";

function Icon({ name, className = "w-5 h-5", alt = "", style }) {
  return (
    <img
      src={`${BASE}/${name}.svg`}
      alt={alt || name}
      className={className}
      style={style}
      draggable={false}
    />
  );
}

export const HomeIcon        = (p) => <Icon name="HomeIcon"        {...p} />;
export const UsersIcon       = (p) => <Icon name="UsersIcon"       {...p} />;
export const SearchIcon      = (p) => <Icon name="SearchIcon"      {...p} />;
export const MessageIcon     = (p) => <Icon name="MessageIcon"     {...p} />;
export const UserIcon        = (p) => <Icon name="UserIcon"        {...p} />;
export const SettingsIcon    = (p) => <Icon name="SettingsIcon"    {...p} />;
export const CloseIcon       = (p) => <Icon name="CloseIcon"       {...p} />;
export const MenuIcon        = (p) => <Icon name="MenuIcon"        {...p} />;
export const GridIcon        = (p) => <Icon name="GridIcon"        {...p} />;
export const HeartIcon       = (p) => <Icon name="HeartIcon"       {...p} />;
export const ShareIcon       = (p) => <Icon name="ShareIcon"       {...p} />;
export const BookmarkIcon    = (p) => <Icon name="BookmarkIcon"    {...p} />;
export const ArrowRightIcon  = (p) => <Icon name="ArrowRightIcon"  {...p} />;
export const ChevronDownIcon = (p) => <Icon name="ChevronDownIcon" {...p} />;
export const SendIcon        = (p) => <Icon name="SendIcon"        {...p} />;
export const EditIcon        = (p) => <Icon name="EditIcon"        {...p} />;
export const LocationIcon    = (p) => <Icon name="LocationIcon"    {...p} />;
export const BuildingIcon    = (p) => <Icon name="BuildingIcon"    {...p} />;
export const DiscussionIcon  = (p) => <Icon name="DiscussionIcon"  {...p} />;
export const CameraIcon      = (p) => <Icon name="CameraIcon"      {...p} />;
export const CheckIcon       = (p) => <Icon name="CheckIcon"       {...p} />;
export const EyeIcon         = (p) => <Icon name="EyeIcon"         {...p} />;
export const ThumbUpIcon     = (p) => <Icon name="ThumbUpIcon"     {...p} />;
export const UploadIcon      = (p) => <Icon name="UploadIcon"      {...p} />;
export const MoreIcon        = (p) => <Icon name="MoreIcon"        {...p} />;
export const UploadCoverIcon = (p) => <Icon name="UploadCoverIcon" {...p} />;
export const SuccessIcon     = (p) => <Icon name="SuccessIcon"     {...p} />;
export const InfoIcon        = (p) => <Icon name="InfoIcon"        {...p} />;
export const XIcon           = (p) => <Icon name="XIcon"           {...p} />;
export const ProfileSettingsIcon = (p) => <Icon name="profile-settings" {...p} />;
export const AccountIcon     = (p) => <Icon name="account"         {...p} />;
export const NotificationsIcon = (p) => <Icon name="notifications" {...p} />;
export const PrivacyIcon     = (p) => <Icon name="privacy"         {...p} />;
export const ChangeCoverIcon = (p) => <Icon name="change-cover"    {...p} />;
export const EditAvatarIcon  = (p) => <Icon name="edit-avatar"     {...p} />;
export const AddSkillIcon    = (p) => <Icon name="add-skill"       {...p} />;
