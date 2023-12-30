#!/usr/bin/env node

import { launchGame } from '../src/index.js';
import getUserResponse from '../games/brain-calc.js';

launchGame(getUserResponse);