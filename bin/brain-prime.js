#!/usr/bin/env node

import { launchGame } from '../src/index.js';
import getUserResponse from '../games/brain-prime.js';

launchGame(getUserResponse);