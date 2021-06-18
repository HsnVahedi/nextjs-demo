import { useState, useEffect } from "react";
import { makeStyles, colors, Button } from "@material-ui/core";
import AddPhotoIcon from "@material-ui/icons/AddPhotoAlternate";
import { useAuth } from "../../../../../context/auth";
import { getBase64 } from "../../../../../modules/images";

const useStyles = makeStyles((theme) => ({
  cover: {
    position: "relative",
    height: 460,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    "&:before": {
      position: "absolute",
      content: '" "',
      top: 0,
      left: 0,
      height: "100%",
      width: "100%",
      backgroundImage:
        "linear-gradient(-180deg, rgba(0,0,0,0.00) 58%, rgba(0,0,0,0.32) 100%)",
    },
    "&:hover": {
      "& $changeButton": {
        visibility: "visible",
      },
    },
  },
  changeButton: {
    visibility: "hidden",
    position: "absolute",
    bottom: theme.spacing(3),
    right: theme.spacing(3),
    backgroundColor: colors.blueGrey[900],
    color: theme.palette.common.white,
    [theme.breakpoints.down("md")]: {
      top: theme.spacing(3),
      bottom: "auto",
    },
    "&:hover": {
      backgroundColor: colors.blueGrey[900],
    },
  },
  addPhotoIcon: {
    marginRight: theme.spacing(1),
  },
}));

const WallPaper = ({ owner }) => {
  const classes = useStyles();
  const { user } = useAuth();
  const [image, setImage] = useState("/static/wallpaper.png");

  useEffect(() => {
    setImage("/static/wallpaper.png");
  }, [owner]);

  return (
    <div className={classes.cover} style={{ backgroundImage: `url(${image})` }}>
      {Boolean(user) && user.id === owner.id && (
        <Button
          variant="contained"
          className={classes.changeButton}
          component="label"
        >
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={(event) => {
              const f = event.target.files[0];
              getBase64(f).then((data) => setImage(data));
            }}
          />
          <AddPhotoIcon className={classes.addPhotoIcon} />
          Change Cover
        </Button>
      )}
    </div>
  );
};

export default WallPaper;
