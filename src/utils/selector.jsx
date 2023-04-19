import React from "react";
import { createSelector } from "reselect";
const getVideoId = (state) => state.video.id
const getVideoDesc = (state) => state.video.desc
const getvideolist = (state) => state.api.list
export const getVideoDescState = createSelector(
    [getVideoDesc],
    (desc) => desc
)
export const getVideoIdState = createSelector(
    [getVideoId],
    (id) => id
)