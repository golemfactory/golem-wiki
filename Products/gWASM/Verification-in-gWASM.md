# Verification scheme

?> When requesting computation in external sources, the results should be verified whether they are correct. 

In gWASM we adopted an approach similar to BOINC. Each subtask is sent to two providers. If the results match, then they are considered correct and providers are paid. If not, then third provider - arbiter - computes again this subtask. Its result is compared to the previous and matching two are paid. For more information you can read our blogpost [here](https://blog.golemproject.net/gwasm-verification/). This verification scheme we call Verification by Redundancy - VbR.

Comparing results itself is a challenge. We ensured that computations in our [sandbox](https://docs.golem.network/#/Products/Brass-Beta/gWASM?id=sandboxing) are deterministic. It limits the usage in some cases but it allows for byte-to-byte comparison.

When you request a task with some subtasks, be aware that there will be two times more jobs/computations. When you list subtasks for a given job in CLI, you will find two times more results. Its is because of VbR.
