package io.haru.action

import xitrum.Action

trait DefaultLayout extends Action {
  override def layout = renderViewNoLayout[DefaultLayout]()
}
