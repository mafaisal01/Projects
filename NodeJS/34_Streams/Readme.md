

## Streams (NodeJS)

**Definition:**
Streams are used to process data **in chunks instead of loading it all into memory**, making applications memory-efficient.

Streams handle large data efficiently by **reading or writing data piece by piece**.


### Types of Streams:

* **Readable:** Used to read data
  *Example:* `fs.createReadStream()`
* **Writable:** Used to write data
  *Example:* `fs.createWriteStream()`
* **Duplex:** Read and write
  *Example:* TCP socket
* **Transform:** Modify data while streaming
  *Example:* zlib compression
  

## Buffer in NodeJS

**Definition:**
A Buffer is used to handle **raw binary data** in NodeJS. It stores data in fixed-size memory blocks.

**Key Point:**

* Stores binary data only
* Fixed size (not resizable)

**Example:**

```js
const buf = Buffer.from('Hello');
console.log(buf);
```




## Crypto Module

**Definition:**
The crypto module provides tools for **encryption, decryption, and hashing** to secure data.

**Example:**
Hashing passwords using `crypto.createHash()`.



## Fork in NodeJS

**Definition:**
`fork()` creates a **child process** to run code in parallel and handle heavy workloads.

**Example:**
Used in the `child_process` module to create workers.



## Test Pyramid

**Definition:**
A testing strategy that balances speed and coverage.

**Levels:**

* **Unit Tests:** Small, fast, many
* **Integration Tests:** Test module interactions
* **End-to-End Tests:** Full application flow



## Piping in NodeJS

**Definition:**
Piping sends data **directly from one stream to another** without storing it in memory.

**Example:**

```js
readStream.pipe(writeStream);
```


## Cluster in NodeJS

**Definition:**
The cluster module allows NodeJS to **use multiple CPU cores** by creating worker processes.

**Common Methods:**

* `fork()` – create worker
* `isMaster` – check master process
* `isWorker` – check worker
* `send()` – message passing
* `kill()` – stop worker

---

If you want, I can make this into a **one-page interview cheat sheet** or **super short one-line answers** 😄
