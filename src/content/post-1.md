---
title: "Unity Sideproject"
date: "2020-05-10"
draft: false
path: "/blog/firstBlogPost"
cover_index: https://www.wpbeginner.com/wp-content/uploads/2020/04/featuredimageswp-og.png 
cover_detail:  https://hamzashatela.com/wp-content/uploads/2017/11/8-Tips-to-Make-Your-Posts-Thumbnail-Suck-Less.jpg
---
# c# movement script & concept art 
---

`Unity` `Animated Gif` `Script`

```javascript
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class playerMovement : MonoBehaviour
{

    public float moveSpeed = 5f;
    public Rigidbody2D rb;
    public Animator animator;
    Vector2 movement;



    // Update is called once per frame
    void Update()
    {
        movement.x = Input.GetAxisRaw("Horizontal");
        movement.y = Input.GetAxisRaw("Vertical");

        animator.SetFloat("Horizontal", movement.x);
        animator.SetFloat("Vertical", movement.y);
        animator.SetFloat("Speed", movement.sqrMagnitude);
    }

void FixedUpdate(){
        rb.MovePosition(rb.position + movement * moveSpeed * Time.fixedDeltaTime);
    }

}
```

---


| Game Name | Release Date | Rating |
|-------|------ |------|
| Just a Knight   | Never   | 5/5 |

---

![conceptart](https://github.com/Jkytol/JKgatsby/blob/master/src/images/Knight.gif?raw=true)

---
