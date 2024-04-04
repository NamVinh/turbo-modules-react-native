/* eslint-disable */
const metroConfigShare = require('@biso24/metro-config');
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

module.exports = mergeConfig(getDefaultConfig(__dirname), metroConfigShare);
