import axios from "axios";

import { ROOT_URL } from "./index";

export const READ_USER = "READ_USER";

export const readUser = () => ({ type: READ_USER });