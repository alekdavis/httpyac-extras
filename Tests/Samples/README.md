# `Samples` folder

The `Samples` folder contains a fake example of a typical test suite covering [CRUD](https://www.codecademy.com/article/what-is-crud) operations against an imaginary REST API. You can use this example as a reference, but keep in mind that they are not operational as-is (i.e. you cannot run them until you make the required changes).

## Overview

The idea behind the CRUD REST API test example is to illustrate how it can be implemented in suc a way that the test can be run repeatedly without relying on any system preconditions. The test uses standard names for the object properies and uses them to detect if the object exists before the CRUD test sequence is executed. If the object is found (in case a previous run failed and did not complete the cleanup step), it performs a pre-rest cleanup. Once the pre-test cleanup is done, the CRUD test sequence creates the test object, performs a get, then an update, validates that the updated object reflects the modified properties, and once all tests are done, deletes the test object.
