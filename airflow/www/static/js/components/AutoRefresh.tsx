/*!
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React from "react";
import { Switch, FormControl, FormLabel, Spinner } from "@chakra-ui/react";
import { useTranslation } from 'react-i18next';

import { useAutoRefresh } from "src/context/autorefresh";

const AutoRefresh = () => {
  const { t } = useTranslation();
  const { isRefreshOn, toggleRefresh, isPaused } = useAutoRefresh();

  return (
    <FormControl display="flex" width="auto" mr={2} alignItems="center">
      <Spinner
        color="blue.500"
        speed="1s"
        mr="4px"
        visibility={isRefreshOn ? "visible" : "hidden"}
      />
      <FormLabel
        htmlFor="auto-refresh"
        mb={0}
        fontWeight="normal"
        display="flex"
        alignItems="center"
      >
        {t("Auto-refresh")}
      </FormLabel>
      <Switch
        id="auto-refresh"
        onChange={toggleRefresh}
        isDisabled={isPaused}
        isChecked={isRefreshOn}
        size="lg"
        title={
          isPaused ? t("Autorefresh is disabled while the DAG is paused") : ""
        }
      />
    </FormControl>
  );
};

export default AutoRefresh;
