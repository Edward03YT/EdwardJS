UI.AddCheckbox('EDWARD03');
UI.AddDropdown('Edward03 type', ['Custom', 'On key']);
const lowdelta_modes = UI.AddMultiDropdown('Edward03 modes', ['Slow walk', 'Low HP', 'Standing']);
UI.AddHotkey('Edward03 on key');

function SetEnabled() { if (UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Edward03')) { UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Edward03 type', 1) } else { UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Edward03 type', 0) }; if (UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Edward03 type') == 0 && UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Edward03')) { UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Edward03 modes', 1);
        UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Edward03 on key', 0) } else { if (UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Edward03 type') == 1 && UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Edward03')) { UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Edward03 modes', 0);
            UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Edward03 on key', 1) } else { UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Edward03 modes', 0);
            UI.SetEnabled('Misc', 'JAVASCRIPT', 'Script items', 'Edward03 on key', 0) } } }

function get_velocity(_0x4ccbx4) { var _0x4ccbx5 = Entity.GetProp(_0x4ccbx4, 'CBasePlayer', 'm_vecVelocity[0]'); return Math['sqrt'](_0x4ccbx5[0] * _0x4ccbx5[0] + _0x4ccbx5[1] * _0x4ccbx5[1]) }

function get_health(_0x4ccbx4) { health_override = Entity.GetProp(_0x4ccbx4, 'CBasePlayer', 'm_iHealth'); return health_override }

function drawString() { var _0x4ccbx8 = Render.AddFont('Tahoma', 7, 200); var _0x4ccbx9 = Render.AddFont('Array', 9, 550); var _0x4ccbxa = Render.AddFont('Tahoma', 9, 550); var _0x4ccbxb = Render.AddFont('Array', 9, 550); var _0x4ccbxc = Render.AddFont('ARIALBD', 18, 800); const _0x4ccbxd = UI['GetValue']['apply'](null, lowdelta_modes); var _0x4ccbxe = false; var screen_size = Global.GetScreenSize();
    localplayer_index = Entity.GetLocalPlayer();
    localplayer_alive = Entity.IsAlive(localplayer_index); var _0x4ccbx5 = get_velocity(localplayer_index); var _0x4ccbx10 = get_health(localplayer_index);
    SlowWalk = false;
    LowHP = false;
    Standing = false;
    Onkey = false; if (UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Edward03') && UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Edward03 type') == 0) { if (_0x4ccbxd & (1 << 0) && UI.IsHotkeyActive('Anti-Aim', 'Extra', 'Slow walk')) { SlowWalk = true } else { SlowWalk = false }; if (_0x4ccbxd & (1 << 1) && _0x4ccbx10 < 50) { LowHP = true } else { LowHP = false }; if (_0x4ccbxd & (1 << 2) && _0x4ccbx5 < 3) { Standing = true } else { Standing = false } } else { if (UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Edward03') && UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Edward03 type') == 1) { if (UI.IsHotkeyActive('Misc', 'JAVASCRIPT', 'Script items', 'Edward03 on key')) { Onkey = true } else { Onkey = false } } }; if (Standing == true || LowHP == true || SlowWalk == true || Onkey == true) { drawIND = true } else { drawIND = false }; if (drawIND == true && localplayer_alive == true && UI.IsHotkeyActive('Anti-Aim', 'Extra', 'Slow walk') == true) { Render.StringCustom(screen_size[0] / 2 + 1, screen_size[1] / 2 + 63 - 30, 1, 'Edward03', [159, 137, 250, 255], _0x4ccbx9) } else { if (drawIND == true && localplayer_alive == true && UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Edward03') == true) { Render.StringCustom(screen_size[0] / 2 + 1, screen_size[1] / 2 + 63 - 30, 1, 'Edward03', [255, 140, 0, 255], _0x4ccbx9) } }; if (drawIND == true && localplayer_alive == true && UI.IsHotkeyActive('Misc', 'JAVASCRIPT', 'Script items', 'Freestand')) { Render.StringCustom(x / 11 + 1, screen_size[1] / 2 + 450 - 30, 1, 'Freestand', [189, 200, 213, 255], _0x4ccbxa) }; if (drawIND == true && localplayer_alive == true && UI.IsHotkeyActive('Anti-Aim', 'Extra', 'Slow walk') == true) { Render.StringCustom(screen_size[0] / 2 + 1, screen_size[1] / 2 + 75 - 28, 1, 'LOWDELTA', [139, 158, 252, 255], _0x4ccbx9) } else { if (drawIND == true && localplayer_alive == true && (Exploit.GetCharge() == 1) && UI.IsHotkeyActive('Rage', 'Exploits', 'Doubletap') == true) { Render.StringCustom(screen_size[0] / 2 + 1, screen_size[1] / 2 + 75 - 30, 1, 'RAPID', [62, 196, 4, 255], _0x4ccbx9) } else { Render.StringCustom(screen_size[0] / 2 + 1, screen_size[1] / 2 + 75 - 30, 1, 'CHARGING', [255, 0, 0, 255], _0x4ccbx9) } }; if (drawIND == true && localplayer_alive == true && UI.IsHotkeyActive('Rage', 'GENERAL', 'Force safe point') == true) { Render.StringCustom(screen_size[0] / 2 + 1, screen_size[1] / 2 + 87 - 30, 1, 'FS', [73, 109, 241, 255], _0x4ccbxa) }; if (drawIND == true && localplayer_alive == true && UI.IsHotkeyActive('Rage', 'GENERAL', 'Force body aim') == true) { Render.StringCustom(screen_size[0] / 2 + 1, screen_size[1] / 2 + 98 - 30, 1, 'BAIM', [196, 78, 78, 255], _0x4ccbxb) }; if (drawIND == true && localplayer_alive == true && UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Edward03') == true) { Render.StringCustom(screen_size[0] / 2 - 70, screen_size[1] / 2 - 10, 1, '<', [136, 89, 254, 255], _0x4ccbxc);
        Render.StringCustom(screen_size[0] / 2 + 70, screen_size[1] / 2 - 10, 1, '>', [136, 89, 254, 255], _0x4ccbxc) }; if (drawIND == true && localplayer_alive == true && UI.IsHotkeyActive('Anti-Aim', 'Fake angels', 'Inverter') == true) { Render.StringCustom(screen_size[0] / 2 - 70, screen_size[1] / 2 - 10, 1, '<', [0, 255, 0, 255], _0x4ccbxc) } else { Render.StringCustom(screen_size[0] / 2 + 70, screen_size[1] / 2 - 10, 1, '>', [0, 255, 0, 255], _0x4ccbxc) } } Global.RegisterCallback('Draw', 'drawString');
Global.RegisterCallback('Draw', 'SetEnabled');
var screen_size = Render.GetScreenSize();
UI.AddCheckbox('Indicator');
UI.AddColorPicker('Indicator color');

function draw() { local = Entity.GetLocalPlayer(); if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Indicator') || !Entity.IsValid(local) || !Entity.IsAlive(local)) { return };
    font = Render.AddFont('Verdana', 6.4, 400);
    x = screen_size[0];
    y = screen_size[1];
    col = UI.GetColor('Misc', 'JAVASCRIPT', 'Script items', 'Indicator color');
    real_yaw = Local.GetRealYaw();
    fake_yaw = Local.GetFakeYaw();
    delta = Math['min'](Math['abs'](real_yaw - fake_yaw) / 2, 40)['toFixed'](0);
    delta_size = Render.TextSizeCustom(delta, font);
    Render.StringCustom(x / 2, y / 1.94 + 1.5, 6, delta, [255, 255, 255, 255], font);
    Render.Circle(x / 2 + delta_size[0] - 2, y / 1.95 + 1.5, 2, [255, 255, 255, 255]) } Cheat.RegisterCallback('Draw', 'draw');
UI.AddLabel('______________________________________');
UI.AddLabel('                   Anti-Aim            ');
UI.AddDropdown('AA MODE', ['Disabled', 'SAFE', 'Edward03']);
if (UI.GetValue('Misc', 'JAVASCRIPT', 'Script Items', 'AA MODE') == 2) { UI.SetValue('Anti-Aim', 'Rage Anti-Aim', 'Yaw offset', 0);
    UI.SetValue('Anti-Aim', 'Rage Anti-Aim', 'Jitter offset', 13);
    UI.SetValue('Anti-Aim', 'Rage Anti-Aim', 'At targets', 1);
    UI.SetValue('Anti-Aim', 'Fake angles', 'Hide real angle', 1);
    UI.SetValue('Anti-Aim', 'Fake angles', 'Desync on shot', 0);
    UI.SetValue('Anti-Aim', 'Fake angles', 'Avoid overlap', 0) };
if (UI.GetValue('Misc', 'JAVASCRIPT', 'Script Items', 'AA MODE') == 1) { UI.SetValue('Anti-Aim', 'Rage Anti-Aim', 'Yaw offset', 10);
    UI.SetValue('Anti-Aim', 'Rage Anti-Aim', 'Jitter offset', 4);
    UI.SetValue('Anti-Aim', 'Fake angles', 'Hide real angle', 1);
    UI.SetValue('Anti-Aim', 'Fake angles', 'Desync on shot', 1);
    UI.SetValue('Anti-Aim', 'Fake angles', 'Avoid overlap', 1);
    AntiAim.SetOverride(1);
    AntiAim.SetFakeOffset(5);
    AntiAim.SetRealOffset(-60) };
var jitter_cache = UI.GetValue('Anti-Aim', 'Rage Anti-Aim', 'Jitter offset');
var yaw_cache = UI.GetValue('Anti-Aim', 'Rage Anti-Aim', 'Yaw offset');
UI.AddLabel('______________________________________');
UI.AddCheckbox('Safe head');

function Safe_Head() { localplayer_index = Entity.GetLocalPlayer(); if (UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Safe head') && UI.IsHotkeyActive('Anti-Aim', 'Extra', 'Slow walk')) { UI.SetValue('Anti-Aim', 'Rage Anti-Aim', 'Yaw offset', 10);
        UI.SetValue('Anti-Aim', 'Rage Anti-Aim', 'Jitter offset', 0);
        AntiAim.SetOverride(1);
        AntiAim.SetFakeOffset(0);
        AntiAim.SetRealOffset(-30) } else { UI.SetValue('Anti-Aim', 'Rage Anti-Aim', 'Jitter offset', jitter_cache);
        AntiAim.SetOverride(0) } }

function Main() { Cheat.RegisterCallback('CreateMove', 'Safe_Head') } Main();
UI.AddLabel('Freestanding');
UI.AddHotkey('Freestand');

function freestand() { if (UI.IsHotkeyActive('Misc', 'JAVASCRIPT', 'Script items', 'Freestand')) { UI.SetValue('Anti-Aim', 'Rage Anti-Aim', 'Auto direction', true) } else { { UI.SetValue('Anti-Aim', 'Rage Anti-Aim', 'Auto direction', false) } } } Cheat.RegisterCallback('CreateMove', 'freestand');
UI.AddLabel('______________________________________');
UI.AddCheckbox('Anti-Bruteforce');
UI.AddSliderInt('FOV', 0, 35);
var shots = 0;

function onBulletImpact() { var _0x4ccbx19 = Entity.GetEntityFromUserID(Event.GetInt('userid')); if (_0x4ccbx19 == Entity.GetLocalPlayer() || Entity.IsTeammate(_0x4ccbx19)) { return }; var _0x4ccbx1a = [Event.GetFloat('x'), Event.GetFloat('y'), Event.GetFloat('z')]; var _0x4ccbx1b = calcAngle(Entity.GetEyePosition(_0x4ccbx19), _0x4ccbx1a); var _0x4ccbx1c = calcAngle(Entity.GetEyePosition(_0x4ccbx19), Entity.GetHitboxPosition(Entity.GetLocalPlayer(), 0)); var _0x4ccbx1d = [_0x4ccbx1c[0] - _0x4ccbx1b[0], _0x4ccbx1c[1] - _0x4ccbx1b[1], 0]; var _0x4ccbx1e = Math['sqrt'](_0x4ccbx1d[0] * _0x4ccbx1d[0] + _0x4ccbx1d[1] * _0x4ccbx1d[1]); if (_0x4ccbx1e < UI.GetValue('FOV')) { UI.ToggleHotkey('Anti-Aim', 'Fake angles', 'Inverter') }; if (UI.GetValue('Anti-Bruteforce')) { shots++; if (!(shots % 4)) { UI.ToggleHotkey('Anti-Aim', 'Fake angles', 'Inverter') } } } Cheat.RegisterCallback('bullet_impact', 'onBulletImpact');
var original_aa = true;
UI.AddHotkey('Legit AA Key');

function legit_aa() { if (UI.IsHotkeyActive('Misc', 'JAVASCRIPT', 'Script items', 'Legit AA Key')) { if (original_aa) { restrictions_cache = UI.GetValue('Misc', 'PERFORMANCE & INFORMATION', 'Information', 'Restrictions');
            hiderealangle_cache = UI.GetValue('Anti-Aim', 'Fake angles', 'Hide real angle');
            yaw_offset_cache = UI.GetValue('Anti-Aim', 'Rage Anti-Aim', 'Yaw offset');
            jitter_offset_cache = UI.GetValue('Anti-Aim', 'Rage Anti-Aim', 'Jitter offset');
            pitch_cache = UI.GetValue('Anti-Aim', 'Extra', 'Pitch');
            original_aa = false };
        UI.SetValue('Misc', 'PERFORMANCE & INFORMATION', 'Information', 'Restrictions', 0);
        UI.SetValue('Anti-Aim', 'Fake angles', 'Hide real angle', true);
        UI.SetValue('Anti-Aim', 'Rage Anti-Aim', 'Yaw offset', 180);
        UI.SetValue('Anti-Aim', 'Rage Anti-Aim', 'Jitter offset', 0);
        UI.SetValue('Anti-Aim', 'Extra', 'Pitch', 0);
        Convar.SetString('unbind e') } else { if (!original_aa) { UI.SetValue('Misc', 'PERFORMANCE & INFORMATION', 'Information', 'Restrictions', restrictions_cache);
            UI.SetValue('Anti-Aim', 'Fake angles', 'Hide real angle', hiderealangle_cache);
            UI.SetValue('Anti-Aim', 'Rage Anti-Aim', 'Yaw offset', yaw_offset_cache);
            UI.SetValue('Anti-Aim', 'Rage Anti-Aim', 'Jitter offset', jitter_offset_cache);
            UI.SetValue('Anti-Aim', 'Extra', 'Pitch', pitch_cache);
            original_aa = true;
            Convar.SetString('bind e +use') } } } Cheat.RegisterCallback('CreateMove', 'legit_aa');
var screen_size = Render.GetScreenSize();
UI.AddLabel('______________________________________');
UI.AddLabel('                   Fake Lag           ');
var js_items = ['Misc', 'JAVASCRIPT', 'Script Items'];
var fakelag_conditions = ['Generic', 'Standing', 'Moving', 'Slowwalking', 'Aerial'];
var fakelag_modes = ['Passive', 'Step', 'Jitter', 'Ping-pong'];
var last_visible_condition = 999;
var last_fl_flag_mode = 999;
var was_menu_visible = false;

function vec_length_2d(_0x4ccbx28) { return Math['sqrt'](_0x4ccbx28[0] * _0x4ccbx28[0] + _0x4ccbx28[1] * _0x4ccbx28[1]) }

function setup_menu() { UI.AddCheckbox('Enable modified fakelag');
    UI.AddMultiDropdown('Fakelag conditions', fakelag_conditions);
    UI.AddDropdown('Currently configured fakelag condition', fakelag_conditions); for (var _0x4ccbx2a = 0; _0x4ccbx2a <= 4; _0x4ccbx2a++) { UI.AddDropdown('Fakelag mode for ' + fakelag_conditions[_0x4ccbx2a]['toLowerCase']() + ' condition', fakelag_modes);
        UI.AddSliderInt(fakelag_conditions[_0x4ccbx2a] + ' passive limit', 1, 16);
        UI.AddSliderInt(fakelag_conditions[_0x4ccbx2a] + ' passive jitter', 1, 100);
        UI.AddSliderInt(fakelag_conditions[_0x4ccbx2a] + ' step', 1, 16);
        UI.AddSliderInt(fakelag_conditions[_0x4ccbx2a] + ' maximum step', 1, 16);
        UI.AddSliderInt(fakelag_conditions[_0x4ccbx2a] + ' jitter minimum', 1, 16);
        UI.AddSliderInt(fakelag_conditions[_0x4ccbx2a] + ' jitter maximum', 1, 16);
        UI.AddSliderInt(fakelag_conditions[_0x4ccbx2a] + ' ping-pong minimum', 1, 16);
        UI.AddSliderInt(fakelag_conditions[_0x4ccbx2a] + ' ping-pong maximum', 1, 16) } } setup_menu();

function handle_visibility() { if (!UI.IsMenuOpen()) { return }; var _0x4ccbx2c = UI.GetValue(js_items, 'Enable modified fakelag'); if (!_0x4ccbx2c && !was_menu_visible) { return }; var _0x4ccbx2d = UI.GetValue(js_items, 'Fakelag conditions');
    UI.SetValue(js_items, 'Fakelag conditions', _0x4ccbx2d |= (1 << 0));
    UI.SetEnabled(js_items, 'Fakelag conditions', _0x4ccbx2c); var _0x4ccbx2e = UI.GetValue(js_items, 'Currently configured fakelag condition'); var _0x4ccbx2f = UI.GetValue(js_items, 'Fakelag mode for ' + fakelag_conditions[_0x4ccbx2e]['toLowerCase']() + ' condition'); if (_0x4ccbx2e == last_visible_condition && _0x4ccbx2c && was_menu_visible && _0x4ccbx30 == last_fl_flag_mode) { return };
    last_visible_condition = _0x4ccbx2e;
    last_fl_flag_mode = _0x4ccbx2f;
    UI.SetEnabled(js_items, 'Currently configured fakelag condition', _0x4ccbx2c); for (var _0x4ccbx2a = 0; _0x4ccbx2a <= 4; _0x4ccbx2a++) { var _0x4ccbx30 = UI.GetValue(js_items, 'Fakelag mode for ' + fakelag_conditions[_0x4ccbx2a]['toLowerCase']() + ' condition');
        UI.SetEnabled(js_items, 'Fakelag mode for ' + fakelag_conditions[_0x4ccbx2a]['toLowerCase']() + ' condition', _0x4ccbx2c && _0x4ccbx2e == _0x4ccbx2a && _0x4ccbx2d & (1 << _0x4ccbx2a));
        UI.SetEnabled(js_items, fakelag_conditions[_0x4ccbx2a] + ' passive limit', _0x4ccbx2c && _0x4ccbx2e == _0x4ccbx2a && _0x4ccbx30 == 0 && _0x4ccbx2d & (1 << _0x4ccbx2a));
        UI.SetEnabled(js_items, fakelag_conditions[_0x4ccbx2a] + ' passive jitter', _0x4ccbx2c && _0x4ccbx2e == _0x4ccbx2a && _0x4ccbx30 == 0 && _0x4ccbx2d & (1 << _0x4ccbx2a));
        UI.SetEnabled(js_items, fakelag_conditions[_0x4ccbx2a] + ' step', _0x4ccbx2c && _0x4ccbx2e == _0x4ccbx2a && _0x4ccbx30 == 1 && _0x4ccbx2d & (1 << _0x4ccbx2a));
        UI.SetEnabled(js_items, fakelag_conditions[_0x4ccbx2a] + ' maximum step', _0x4ccbx2c && _0x4ccbx2e == _0x4ccbx2a && _0x4ccbx30 == 1 && _0x4ccbx2d & (1 << _0x4ccbx2a));
        UI.SetEnabled(js_items, fakelag_conditions[_0x4ccbx2a] + ' jitter minimum', _0x4ccbx2c && _0x4ccbx2e == _0x4ccbx2a && _0x4ccbx30 == 2 && _0x4ccbx2d & (1 << _0x4ccbx2a));
        UI.SetEnabled(js_items, fakelag_conditions[_0x4ccbx2a] + ' jitter maximum', _0x4ccbx2c && _0x4ccbx2e == _0x4ccbx2a && _0x4ccbx30 == 2 && _0x4ccbx2d & (1 << _0x4ccbx2a));
        UI.SetEnabled(js_items, fakelag_conditions[_0x4ccbx2a] + ' ping-pong minimum', _0x4ccbx2c && _0x4ccbx2e == _0x4ccbx2a && _0x4ccbx30 == 3 && _0x4ccbx2d & (1 << _0x4ccbx2a));
        UI.SetEnabled(js_items, fakelag_conditions[_0x4ccbx2a] + ' ping-pong maximum', _0x4ccbx2c && _0x4ccbx2e == _0x4ccbx2a && _0x4ccbx30 == 3 && _0x4ccbx2d & (1 << _0x4ccbx2a)) };
    was_menu_visible = _0x4ccbx2c }

function get_condition(_0x4ccbx32) { var _0x4ccbx33 = Entity.GetProp(_0x4ccbx32, 'CBasePlayer', 'm_fFlags'); var _0x4ccbx34 = Entity.GetProp(_0x4ccbx32, 'CBasePlayer', 'm_vecVelocity[0]'); var _0x4ccbx35 = vec_length_2d(_0x4ccbx34); var _0x4ccbx36 = UI.IsHotkeyActive('Anti-Aim', 'Extra', 'Slow walk') && _0x4ccbx35 > 1.0; var _0x4ccbx2d = UI.GetValue(js_items, 'Fakelag conditions'); if (!(_0x4ccbx33 & (1 << 0))) { return _0x4ccbx2d & (1 << 4) ? 4 : 0 }; if (_0x4ccbx36) { return _0x4ccbx2d & (1 << 3) ? 3 : 0 }; if (_0x4ccbx35 > 3.5) { return _0x4ccbx2d & (1 << 2) ? 2 : 0 } else { return _0x4ccbx2d & (1 << 1) ? 1 : 0 }; return 0 }

function get_fl_data_based_on_conditions(_0x4ccbx32) { var _0x4ccbx38 = get_condition(_0x4ccbx32); var _0x4ccbx39 = { fl_mode: 0, min_lag: 0, max_lag: 1 };
    _0x4ccbx39['fl_mode'] = UI.GetValue(js_items, 'Fakelag mode for ' + fakelag_conditions[_0x4ccbx38]['toLowerCase']() + ' condition'); switch (_0x4ccbx39['fl_mode']) {
    case 0:
        _0x4ccbx39['min_lag'] = UI.GetValue(js_items, fakelag_conditions[_0x4ccbx38] + ' passive limit');
        _0x4ccbx39['max_lag'] = UI.GetValue(js_items, fakelag_conditions[_0x4ccbx38] + ' passive jitter'); break;
    case 1:
        _0x4ccbx39['min_lag'] = UI.GetValue(js_items, fakelag_conditions[_0x4ccbx38] + ' step');
        _0x4ccbx39['max_lag'] = UI.GetValue(js_items, fakelag_conditions[_0x4ccbx38] + ' maximum step'); break;
    case 2:
        _0x4ccbx39['min_lag'] = UI.GetValue(js_items, fakelag_conditions[_0x4ccbx38] + ' jitter minimum');
        _0x4ccbx39['max_lag'] = UI.GetValue(js_items, fakelag_conditions[_0x4ccbx38] + ' jitter maximum'); break;
    case 3:
        _0x4ccbx39['min_lag'] = UI.GetValue(js_items, fakelag_conditions[_0x4ccbx38] + ' ping-pong minimum');
        _0x4ccbx39['max_lag'] = UI.GetValue(js_items, fakelag_conditions[_0x4ccbx38] + ' ping-pong maximum'); break }; return _0x4ccbx39 }

function clamp(_0x4ccbx3b, _0x4ccbx3c, _0x4ccbx3d) { return Math['max'](_0x4ccbx3c, Math['min'](_0x4ccbx3d, _0x4ccbx3b)) }

function random_int(_0x4ccbx3c, _0x4ccbx3d) { return Math['floor'](Math['random']() * (Math['ceil'](_0x4ccbx3d) - Math['floor'](_0x4ccbx3c) + 1)) + Math['floor'](_0x4ccbx3c) }
var old_simtime = 0.0;

function handle_fakelag() { if (UI.GetValue(js_items, 'Enable modified fakelag')) { var _0x4ccbx32 = Entity.GetLocalPlayer(); if (Entity.IsValid(_0x4ccbx32) && Entity.IsAlive(_0x4ccbx32)) { UI.SetValue('Anti-Aim', 'Fake-Lag', 'Triggers', 0); var _0x4ccbx39 = get_fl_data_based_on_conditions(_0x4ccbx32); var _0x4ccbx41 = Entity.GetProp(_0x4ccbx32, 'DT_BaseEntity', 'm_flSimulationTime'); var _0x4ccbx42 = UI.GetValue('Anti-Aim', 'Fake-Lag', 'Limit'); if (_0x4ccbx39['fl_mode'] == 0) { UI.SetValue('Anti-Aim', 'Fake-Lag', 'Limit', _0x4ccbx39['min_lag']);
                UI.SetValue('Anti-Aim', 'Fake-Lag', 'Jitter', _0x4ccbx39['max_lag']); return } else { if (_0x4ccbx39['fl_mode'] != 0) { UI.SetValue('Anti-Aim', 'Fake-Lag', 'Jitter', 0) } }; if (_0x4ccbx41 != old_simtime) { var _0x4ccbx43 = 0;
                old_simtime = _0x4ccbx41; switch (_0x4ccbx39['fl_mode']) {
                case 1:
                    if (_0x4ccbx42 >= _0x4ccbx39['max_lag']) { break };
                    _0x4ccbx43 = clamp(_0x4ccbx42 + _0x4ccbx39['min_lag'], 0, _0x4ccbx39['max_lag']); break;
                case 2:
                    _0x4ccbx43 = random_int(_0x4ccbx39['min_lag'], _0x4ccbx39['max_lag']); break;
                case 3:
                    _0x4ccbx43 = _0x4ccbx39['min_lag'] == _0x4ccbx42 ? _0x4ccbx39['max_lag'] : _0x4ccbx39['min_lag']; break };
                UI.SetValue('Anti-Aim', 'Fake-Lag', 'Limit', _0x4ccbx43) } } } } Cheat.RegisterCallback('Draw', 'handle_fakelag');
Cheat.RegisterCallback('Draw', 'handle_visibility');
UI.AddLabel('______________________________________');
UI.AddLabel('          Rage-Bot Improvement        ');
UI.AddLabel('______________________________________');
UI.AddCheckbox('Display indicator');
UI.AddHotkey('Heavy Pistol Override');
UI.AddSliderInt('Heavy Pistol Mindmg', 0, 130);
UI.AddHotkey('Scout Override');
UI.AddSliderInt('Scout Mindmg', 0, 130);
UI.AddHotkey('AWP Override');
UI.AddSliderInt('AWP Mindmg', 0, 130);
UI.AddHotkey('Auto Override');
UI.AddSliderInt('Auto Mindmg', 0, 130);
var heavy_cache = UI.GetValue('Rage', 'HEAVY PISTOL', 'Targeting', 'Minimum damage');
var scout_cache = UI.GetValue('Rage', 'SCOUT', 'Targeting', 'Minimum damage');
var awp_cache = UI.GetValue('Rage', 'AWP', 'Targeting', 'Minimum damage');
var auto_cache = UI.GetValue('Rage', 'AUTOSNIPER', 'Targeting', 'Minimum damage');

function isActive(a) { return UI.IsHotkeyActive('Script items', a) }

function setValue(_0x4ccbx4b, _0x4ccbx4c) { UI.SetValue('Rage', _0x4ccbx4b['toUpperCase'](), 'Targeting', 'Minimum damage', _0x4ccbx4c) }

function isHeavyPistol(_0x4ccbx4e) { if (_0x4ccbx4e == 'r8 revolver' || _0x4ccbx4e == 'desert eagle') { return true } }

function isAutoSniper(_0x4ccbx4e) { if (_0x4ccbx4e == 'scar 20' || weapon_name == 'g3sg1') { return true } }

function onCM() { heavy_value = UI.GetValue('Script items', 'Heavy Pistol Mindmg');
    scout_value = UI.GetValue('Script items', 'Scout Mindmg');
    awp_value = UI.GetValue('Script items', 'AWP Mindmg');
    auto_value = UI.GetValue('Script items', 'Auto Mindmg');
    weapon_name = Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer())); if (isActive('Heavy Pistol Override') && isHeavyPistol(weapon_name)) { setValue('HEAVY PISTOL', heavy_value) } else { setValue('HEAVY PISTOL', heavy_cache) }; if (isActive('Scout Override') && weapon_name == 'ssg 08') { setValue('SCOUT', scout_value) } else { setValue('SCOUT', scout_cache) }; if (isActive('AWP Override') && weapon_name == 'awp') { setValue('AWP', awp_value) } else { setValue('AWP', awp_cache) }; if (isActive('Auto Override') && isAutoSniper(weapon_name)) { setValue('AUTOSNIPER', auto_value) } else { setValue('AUTOSNIPER', auto_cache) } }

function indicator() { font = Render.AddFont('Tahoma', 8, 600);
    screen = Render.GetScreenSize();
    wep = Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()));
    x = screen[0] - screen[0] + 20;
    y = screen[1] - 100;
    heavy = '' + UI.GetValue('Rage', 'HEAVY PISTOL', 'Targeting', 'Minimum damage');
    scout = '' + UI.GetValue('Rage', 'SCOUT', 'Targeting', 'Minimum damage');
    awp = '' + UI.GetValue('Rage', 'AWP', 'Targeting', 'Minimum damage');
    auto = '' + UI.GetValue('Rage', 'AUTOSNIPER', 'Targeting', 'Minimum damage'); var _0x4ccbx52 = ''; if (UI.GetValue('Script items', 'Display indicator') && Entity.IsValid(Entity.GetLocalPlayer()) && Entity.IsAlive(Entity.GetLocalPlayer())) { if (isHeavyPistol(wep)) { _0x4ccbx52 = heavy } else { if (wep == 'ssg 08') { _0x4ccbx52 = scout } else { if (wep == 'awp') { _0x4ccbx52 = awp } else { if (isAutoSniper(wep)) { _0x4ccbx52 = auto } } } } }; if (_0x4ccbx52 == '' + 0) { _0x4ccbx52 = 'DYNAMIC' };
    Render.StringCustom(x + 945, y - 440, 0, _0x4ccbx52 + '', [0, 0, 0, 255], font);
    Render.StringCustom(x + 945, y - 440, 0, _0x4ccbx52 + '', [255, 255, 255, 255], font) } Cheat.RegisterCallback('Draw', 'indicator');
Cheat.RegisterCallback('CreateMove', 'onCM');
UI.AddCheckbox('Edward03 Doubletap Improvement');
var time, delay, fillbar, shotsfired;

function can_shift_shot(_0x4ccbx58) { var _0x4ccbx59 = Entity.GetLocalPlayer(); var _0x4ccbx5a = Entity.GetWeapon(_0x4ccbx59); if (_0x4ccbx59 == null || _0x4ccbx5a == null) { return false }; var _0x4ccbx5b = Entity.GetProp(_0x4ccbx59, 'CCSPlayer', 'm_nTickBase'); var _0x4ccbx5c = Globals.TickInterval() * (_0x4ccbx5b - _0x4ccbx58); if (_0x4ccbx5c < Entity.GetProp(_0x4ccbx59, 'CCSPlayer', 'm_flNextAttack')) { return false }; if (_0x4ccbx5c < Entity.GetProp(_0x4ccbx5a, 'CBaseCombatWeapon', 'm_flNextPrimaryAttack')) { return false }; return true }

function _TBC_CREATE_MOVE() { var _0x4ccbx5e = Exploit.GetCharge();
    Exploit[(_0x4ccbx5e != 1 ? 'Enable' : 'Disable') + 'Recharge'](); if (can_shift_shot(17) && _0x4ccbx5e != 1) { Exploit.DisableRecharge();
        Exploit.Recharge() };
    Exploit.OverrideTolerance(0);
    Exploit.OverrideShift(17) }

function _TBC_UNLOAD() { Exploit.EnableRecharge() } Cheat.RegisterCallback('CreateMove', '_TBC_CREATE_MOVE');
Cheat.RegisterCallback('Unload', '_TBC_UNLOAD');
UI.AddCheckbox('Edward03 Doubletap Recharge Improvement');
const menu = { menu_types: { TYPE_VALUE: 0, TYPE_COLOR: 1, TYPE_KEYBIND: 2, TYPE_REFERENCE: 3 }, menu_array: [], create_checkbox: function (_0x4ccbx61) { return this['menu_array']['push']({ type: this['menu_types']['TYPE_VALUE'], var_name: UI.AddCheckbox(_0x4ccbx61), is_item_visible: true }) - 1 }, create_slider_int: function (_0x4ccbx61, _0x4ccbx62, _0x4ccbx63) { return this['menu_array']['push']({ type: this['menu_types']['TYPE_VALUE'], var_name: UI.AddSliderInt(_0x4ccbx61, _0x4ccbx62, _0x4ccbx63), is_item_visible: true }) - 1 }, create_slider_float: function (_0x4ccbx61, _0x4ccbx62, _0x4ccbx63) { return this['menu_array']['push']({ type: this['menu_types']['TYPE_VALUE'], var_name: UI.AddSliderFloat(_0x4ccbx61, _0x4ccbx62, _0x4ccbx63), is_item_visible: true }) - 1 }, create_dropdown: function (_0x4ccbx61, _0x4ccbx64) { return this['menu_array']['push']({ type: this['menu_types']['TYPE_VALUE'], var_name: UI.AddDropdown(_0x4ccbx61, _0x4ccbx64), is_item_visible: true }) - 1 }, create_multi_dropdown: function (_0x4ccbx61, _0x4ccbx64) { return this['menu_array']['push']({ type: this['menu_types']['TYPE_VALUE'], var_name: UI.AddMultiDropdown(_0x4ccbx61, _0x4ccbx64), is_item_visible: true }) - 1 }, create_colorpicker: function (_0x4ccbx61) { return this['menu_array']['push']({ type: this['menu_types']['TYPE_COLOR'], var_name: UI.AddColorPicker(_0x4ccbx61), is_item_visible: true }) - 1 }, create_keybind: function (_0x4ccbx61) { return this['menu_array']['push']({ type: this['menu_types']['TYPE_KEYBIND'], var_name: UI.AddHotkey(_0x4ccbx61), is_item_visible: true }) - 1 }, create_menu_reference: function (_0x4ccbx65, _0x4ccbx66) { return this['menu_array']['push']({ type: this['menu_types']['TYPE_REFERENCE'], var_name: _0x4ccbx65, is_item_visible: true, reference_subtype: _0x4ccbx66 }) - 1 }, get_item_value: function (_0x4ccbx67) { if (typeof (this['menu_array'][_0x4ccbx67]) != 'undefined') { const _0x4ccbx66 = this['menu_array'][_0x4ccbx67]['type'] == this['menu_types']['TYPE_REFERENCE'] ? this['menu_array'][_0x4ccbx67]['reference_subtype'] : this['menu_array'][_0x4ccbx67]['type']; switch (_0x4ccbx66) {
            case this['menu_types']['TYPE_VALUE']:
                return UI['GetValue']['apply'](null, this['menu_array'][_0x4ccbx67]['var_name']);
            case this['menu_types']['TYPE_COLOR']:
                return UI['GetColor']['apply'](null, this['menu_array'][_0x4ccbx67]['var_name']);
            case this['menu_types']['TYPE_KEYBIND']:
                return UI['IsHotkeyActive']['apply'](null, this['menu_array'][_0x4ccbx67]['var_name']);
            default:
                throw new Error('[onetap] invalid type specified for get_script_item_value call (variable name ' + menu_array[_0x4ccbx67]['var_name'] + ', specified type: ' + type + ')\x0A') } }; throw new Error('[onetap] invalid menu item specified for get_script_item_value\x0A') }, set_item_visibility: function (_0x4ccbx67, _0x4ccbx68) { if (typeof (this['menu_array'][_0x4ccbx67]) != 'undefined') { if (this['menu_array'][_0x4ccbx67]['is_item_visible'] != _0x4ccbx68 && UI.IsMenuOpen()) { UI['SetEnabled']['apply'](null, this['menu_array'][_0x4ccbx67]['var_name']['concat'](_0x4ccbx68));
                this['menu_array'][_0x4ccbx67]['is_item_visible'] = _0x4ccbx68 } } else { throw new Error('[onetap] invalid menu item specified for set_item_visibility\x0A') } }, set_item_value: function (_0x4ccbx67, _0x4ccbx69) { if (typeof (this['menu_array'][_0x4ccbx67]) != 'undefined') { const _0x4ccbx66 = this['menu_array'][_0x4ccbx67]['type'] == this['menu_types']['TYPE_REFERENCE'] ? this['menu_array'][_0x4ccbx67]['reference_subtype'] : this['menu_array'][_0x4ccbx67]['type']; switch (_0x4ccbx66) {
            case this['menu_types']['TYPE_VALUE']:
                UI['SetValue']['apply'](null, this['menu_array'][_0x4ccbx67]['var_name']['concat'](_0x4ccbx69)); break;
            case this['menu_types']['TYPE_COLOR']:
                UI['SetColor']['apply'](null, this['menu_array'][_0x4ccbx67]['var_name']['concat'](_0x4ccbx69)); break;
            case this['menu_types']['TYPE_KEYBIND']:
                const _0x4ccbx6a = this['get_item_value'](_0x4ccbx67); if (_0x4ccbx6a != _0x4ccbx69) { UI['ToggleHotkey']['apply'](null, this['menu_array'][_0x4ccbx67]['var_name']) }; break;
            default:
                throw new Error('[onetap] invalid type specified for set_item_value (variable name ' + menu_array[_0x4ccbx67]['var_name'] + ', specified type: ' + this['menu_array'][_0x4ccbx67]['type'] + ')\x0A') } } else { throw new Error('[onetap] invalid menu item specified for set_item_value\x0A') } } };
const master_switch = menu['create_checkbox']('Doubletap improvements');
const doubletap_speed = menu['create_slider_int']('Speed', 0, 2);
const doubletap_enabled_hotkey_reference = menu['create_menu_reference'](['Rage', 'Doubletap'], menu['menu_types'].TYPE_KEYBIND);
const doubletap_enabled_value_reference = menu['create_menu_reference'](['Rage', 'Doubletap'], menu['menu_types'].TYPE_VALUE);
const utility = { log_prefix: '[Edward03 Doubletap info] ', log_prefix_col: [0, 255, 0, 200], log: function (_0x4ccbx70) { Cheat.PrintColor(this['log_prefix_col'], this['log_prefix']);
        Cheat.Print(_0x4ccbx70 + '\x0A') } };
const able_to_shift_shot = function (_0x4ccbx32, _0x4ccbx58) { const _0x4ccbx72 = (Entity.GetProp(_0x4ccbx32, 'CCSPlayer', 'm_nTickBase') - _0x4ccbx58) * Globals.TickInterval(); return _0x4ccbx72 > Entity.GetProp(_0x4ccbx32, 'CCSPlayer', 'm_flNextAttack') && _0x4ccbx72 > Entity.GetProp(Entity.GetWeapon(_0x4ccbx32), 'CBaseCombatWeapon', 'm_flNextPrimaryAttack') };
const on_move = function () { if (menu['get_item_value'](doubletap_enabled_value_reference) && menu['get_item_value'](doubletap_enabled_hotkey_reference) && menu['get_item_value'](master_switch)) { const _0x4ccbx74 = menu['get_item_value'](doubletap_speed);
        Exploit.OverrideShift(12 + _0x4ccbx74);
        Exploit.OverrideTolerance(2 - _0x4ccbx74); const _0x4ccbx32 = Entity.GetLocalPlayer(); const _0x4ccbx75 = Exploit.GetCharge();
        _0x4ccbx75 != 1 ? Exploit.EnableRecharge() : Exploit.DisableRecharge(); const _0x4ccbx76 = able_to_shift_shot(_0x4ccbx32, 12 + _0x4ccbx74); var _0x4ccbx77 = _0x4ccbx75 != 1 && _0x4ccbx76; const _0x4ccbx78 = Entity.GetEnemies()['filter'](function (_0x4ccbx79) { return Entity.IsValid(_0x4ccbx79) && Entity.IsAlive(_0x4ccbx79) && !Entity.IsDormant(_0x4ccbx79) }); const _0x4ccbx7a = Entity.GetEyePosition(_0x4ccbx32); if (_0x4ccbx77) { for (var _0x4ccbx2a = 0; _0x4ccbx2a < _0x4ccbx78['length']; _0x4ccbx2a++) { const _0x4ccbx79 = _0x4ccbx78[_0x4ccbx2a]; const _0x4ccbx7b = Entity.GetHitboxPosition(_0x4ccbx79, 0); const _0x4ccbx7c = Entity.GetRenderOrigin(_0x4ccbx79); if (typeof (_0x4ccbx7b) != 'undefined') { const _0x4ccbx7d = Trace.Line(_0x4ccbx32, _0x4ccbx7a, _0x4ccbx7b); const _0x4ccbx7e = Trace.Line(_0x4ccbx32, _0x4ccbx7a, _0x4ccbx7c); if (_0x4ccbx7d[0] == _0x4ccbx79 || _0x4ccbx7d[1] == 1 || _0x4ccbx7e[0] == _0x4ccbx79 || _0x4ccbx7e[1] == 1) { _0x4ccbx77 = false; break } } } }; if (_0x4ccbx77) { Exploit.DisableRecharge();
            Exploit.Recharge() } } else { Exploit.EnableRecharge() } };
const on_draw = function () { const _0x4ccbx32 = Entity.GetLocalPlayer(); if (Entity.IsValid(_0x4ccbx32) && Entity.IsAlive(_0x4ccbx32)) { const _0x4ccbx8 = Render.AddFont('Segoe UI', 8, 400); const _0x4ccbx75 = Exploit.GetCharge(); const can_shift_shot = able_to_shift_shot(_0x4ccbx32, 14); const _0x4ccbx80 = menu['get_item_value'](doubletap_enabled_hotkey_reference) && menu['get_item_value'](doubletap_enabled_value_reference) && _0x4ccbx75 == 1 ? '2' : menu['get_item_value'](doubletap_enabled_hotkey_reference) && menu['get_item_value'](doubletap_enabled_value_reference) && can_shift_shot ? '1' : '0'; const _0x4ccbx70 = 'Edward03 Doubletap info| exp. charge: ' + _0x4ccbx75['toFixed'](2) + ' | state: ' + _0x4ccbx80; const _0x4ccbx81 = Render.TextSizeCustom(_0x4ccbx70, _0x4ccbx8);
        _0x4ccbx81[0] += 8;
        _0x4ccbx81[1] += 4; const _0x4ccbx82 = Render.GetScreenSize()[0] - _0x4ccbx81[0] - 10,
            _0x4ccbx83 = 360;
        Render.FilledRect(_0x4ccbx82 - 4, _0x4ccbx83 + 1, 3, _0x4ccbx81[1], [89, 119, 239, 255]);
        Render.FilledRect(_0x4ccbx82 - 1, _0x4ccbx83 + 1, _0x4ccbx81[0] + 3, _0x4ccbx81[1], [17, 17, 17, 200]);
        Render.StringCustom(_0x4ccbx82 + 4, _0x4ccbx83 + 2, 0, _0x4ccbx70, [255, 255, 255, 255], _0x4ccbx8) } };
const on_unload = function () { Exploit.EnableRecharge() };
Cheat.RegisterCallback('CreateMove', 'on_move');
Cheat.RegisterCallback('Unload', 'on_unload');
Cheat.RegisterCallback('Draw', 'on_draw');
utility['log']('Edward03 Doubletap ..................................loading.................................................................DONE!');
UI.AddLabel('            |   /Double-tap/   | ');
UI.AddSliderInt('Double tap speed', 0, 3);

function can_shift_shot(_0x4ccbx58) { var _0x4ccbx59 = Entity.GetLocalPlayer(); var _0x4ccbx5a = Entity.GetWeapon(_0x4ccbx59); if (_0x4ccbx59 == null || _0x4ccbx5a == null) { return false }; var _0x4ccbx5b = Entity.GetProp(_0x4ccbx59, 'CCSPlayer', 'm_nTickBase'); var _0x4ccbx5c = Globals.TickInterval() * (_0x4ccbx5b - _0x4ccbx58); if (_0x4ccbx5c < Entity.GetProp(_0x4ccbx59, 'CCSPlayer', 'm_flNextAttack')) { return false }; if (_0x4ccbx5c < Entity.GetProp(_0x4ccbx5a, 'CBaseCombatWeapon', 'm_flNextPrimaryAttack')) { return false }; return true }

function _TBC_CREATE_MOVE() { var _0x4ccbx5e = Exploit.GetCharge(); var _0x4ccbx85 = UI.GetValue('Misc', 'JAVASCRIPT', 'Double tap speed');
    Exploit[(_0x4ccbx5e != 1 ? 'Enable' : 'Disable') + 'Recharge'](); if (can_shift_shot(14) && _0x4ccbx5e != 1) { Exploit.DisableRecharge();
        Exploit.Recharge() };
    Exploit.OverrideTolerance(_0x4ccbx85);
    Exploit.OverrideShift(14 - _0x4ccbx85) }

function _TBC_UNLOAD() { Exploit.EnableRecharge() } Cheat.RegisterCallback('CreateMove', '_TBC_CREATE_MOVE');
Cheat.RegisterCallback('Unload', '_TBC_UNLOAD');
UI.AddSliderInt('Double tap tolerance', 0, 3);

function can_shift_shot(_0x4ccbx58) { var _0x4ccbx59 = Entity.GetLocalPlayer(); var _0x4ccbx5a = Entity.GetWeapon(_0x4ccbx59); if (_0x4ccbx59 == null || _0x4ccbx5a == null) { return false }; var _0x4ccbx5b = Entity.GetProp(_0x4ccbx59, 'CCSPlayer', 'm_nTickBase'); var _0x4ccbx5c = Globals.TickInterval() * (_0x4ccbx5b - _0x4ccbx58); if (_0x4ccbx5c < Entity.GetProp(_0x4ccbx59, 'CCSPlayer', 'm_flNextAttack')) { return false }; if (_0x4ccbx5c < Entity.GetProp(_0x4ccbx5a, 'CBaseCombatWeapon', 'm_flNextPrimaryAttack')) { return false }; return true }

function _TBC_CREATE_MOVE() { var _0x4ccbx5e = Exploit.GetCharge(); var _0x4ccbx85 = UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Double tap tolerance');
    Exploit[(_0x4ccbx5e != 1 ? 'Enable' : 'Disable') + 'Recharge'](); if (can_shift_shot(14) && _0x4ccbx5e != 1) { Exploit.DisableRecharge();
        Exploit.Recharge() };
    Exploit.OverrideTolerance(_0x4ccbx85);
    Exploit.OverrideShift(14 - _0x4ccbx85) }

function _TBC_UNLOAD() { Exploit.EnableRecharge() } Cheat.RegisterCallback('CreateMove', '_TBC_CREATE_MOVE');
Cheat.RegisterCallback('Unload', '_TBC_UNLOAD');

function on_ragebot_fire() { ragebot_target_exploit = Event.GetInt('exploit'); if (UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Better doubletap')) { if (ragebot_target_exploit == 2) { UI.SetValue('Rage', 'GENERAL', 'Exploits', 'Doubletap fast recovery', true) } else { UI.SetValue('Rage', 'GENERAL', 'Exploits', 'Doubletap fast recovery', false) } } } Global.RegisterCallback('ragebot_fire', 'on_ragebot_fire');
UI.AddCheckbox(' Early AutoStop ');
UI.AddSliderInt('Ticks to slow prior to peek', 1, 12);
UI.AddSliderInt('Slow speed', 0, 100);
UI.AddCheckbox('Disable when in air');
UI.AddCheckbox('Draw debug lines');
var wepname_category = { "\x75\x73\x70\x20\x73": 'Pistol', "\x67\x6C\x6F\x63\x6B\x20\x31\x38": 'Pistol', "\x70\x32\x30\x30\x30": 'Pistol', "\x64\x75\x61\x6C\x20\x62\x65\x72\x65\x74\x74\x61\x73": 'Pistol', "\x72\x38\x20\x72\x65\x76\x6F\x6C\x76\x65\x72": 'Heavy Pistol', "\x64\x65\x73\x65\x72\x74\x20\x65\x61\x67\x6C\x65": 'Heavy Pistol', "\x70\x32\x35\x30": 'Pistol', "\x74\x65\x63\x20\x39": 'Pistol', "\x6D\x70\x39": 'SMG', "\x6D\x61\x63\x20\x31\x30": 'SMG', "\x70\x70\x20\x62\x69\x7A\x6F\x6E": 'SMG', "\x75\x6D\x70\x20\x34\x35": 'SMG', "\x61\x6B\x20\x34\x37": 'Rifle', "\x73\x67\x20\x35\x35\x33": 'Rifle', "\x61\x75\x67": 'Rifle', "\x6D\x34\x61\x31\x20\x73": 'Rifle', "\x6D\x34\x61\x34": 'Rifle', "\x73\x73\x67\x20\x30\x38": 'Scout', "\x61\x77\x70": 'AWP', "\x67\x33\x73\x67\x31": 'Auto', "\x73\x63\x61\x72\x20\x32\x30": 'Auto', "\x6E\x6F\x76\x61": 'Heavy', "\x78\x6D\x31\x30\x31\x34": 'Heavy', "\x6D\x61\x67\x20\x37": 'Heavy', "\x6D\x32\x34\x39": 'Heavy', "\x6E\x65\x67\x65\x76": 'Heavy' };
var gen_weps = ['SMG', 'Rifle', 'Heavy'];
var slow = false;
var last_shot = 0;

function check_extrapolated_position() { var _0x4ccbx8c = UI.GetValue('Script items', 'Ticks to slow prior to peek'); var _0x4ccbx32 = Entity.GetLocalPlayer(); var _0x4ccbx78 = Entity.GetEnemies(); var _0x4ccbx8d = extrapolate_position(Entity.GetHitboxPosition(_0x4ccbx32, 5), _0x4ccbx8c, _0x4ccbx32); var _0x4ccbx8e = weaponType(Entity.GetName(Entity.GetWeapon(_0x4ccbx32))); var _0x4ccbx8f = ~gen_weps['indexOf'](_0x4ccbx8e) ? UI.GetValue('Rage', 'GENERAL', 'Targeting', 'Minimum damage') : UI.GetValue('Rage', _0x4ccbx8e['toUpperCase'](), 'Targeting', 'Minimum damage'); var _0x4ccbx90 = UI.GetValue('Script items', 'Disable when in air'); var _0x4ccbx91 = UI.GetValue('Script items', 'Draw debug lines'); for (var _0x4ccbx92 in _0x4ccbx78) { if (!Entity.IsAlive(_0x4ccbx78[_0x4ccbx92]) || !Entity.IsValid(_0x4ccbx78[_0x4ccbx92]) || Entity.IsDormant(_0x4ccbx78[_0x4ccbx92]) || (in_air(_0x4ccbx32) && _0x4ccbx90)) { slow = false; continue }; var _0x4ccbx93 = Trace.Bullet(_0x4ccbx32, _0x4ccbx78[_0x4ccbx92], _0x4ccbx8d, Entity.GetHitboxPosition(_0x4ccbx78[_0x4ccbx92], 5)); if (_0x4ccbx93[1] > _0x4ccbx8f || _0x4ccbx93[2] && Globals.Curtime() - last_shot > 5) { slow = true; if (_0x4ccbx91) { var _0x4ccbx94 = Render.WorldToScreen(Entity.GetHitboxPosition(_0x4ccbx32, 5)); var _0x4ccbx95 = Render.WorldToScreen(_0x4ccbx8d); var _0x4ccbx96 = Render.WorldToScreen(Entity.GetHitboxPosition(_0x4ccbx78[_0x4ccbx92], 5));
                Render.Line(_0x4ccbx94[0], _0x4ccbx94[1], _0x4ccbx95[0], _0x4ccbx95[1], [255, 255, 255, 255]);
                Render.Line(_0x4ccbx95[0], _0x4ccbx95[1], _0x4ccbx96[0], _0x4ccbx96[1], [255, 255, 255, 255]) } } else { slow = false } } }

function handle_movement() { var _0x4ccbx98 = UI.GetValue('Script items', 'Slow speed'); if (!slow) { return }; var _0x4ccbx99 = 0; var _0x4ccbx9a = 0; if (Input.IsKeyPressed(0x57)) { _0x4ccbx99 = 1 } else { if (Input.IsKeyPressed(0x53)) { _0x4ccbx99 = -1 } }; if (Input.IsKeyPressed(0x44)) { _0x4ccbx9a = 1 } else { if (Input.IsKeyPressed(0x41)) { _0x4ccbx9a = -1 } };
    UserCMD.SetMovement([_0x4ccbx99 * _0x4ccbx98, _0x4ccbx9a * _0x4ccbx98, 0]) }

function ragebot_fire() { last_shot = Globals.Curtime() } Cheat.RegisterCallback('CreateMove', 'handle_movement');
Cheat.RegisterCallback('ragebot_fire', 'ragebot_fire');
Cheat.RegisterCallback('Draw', 'check_extrapolated_position');

function weaponType() { var _0x4ccbx32 = Entity.GetLocalPlayer(); var _0x4ccbx8e = Entity.GetName(Entity.GetWeapon(_0x4ccbx32)); if (wepname_category[_0x4ccbx8e] == undefined) { return '' }; return wepname_category[_0x4ccbx8e] }

function in_air(_0x4ccbx4) { fv = Entity.GetProp(_0x4ccbx4, 'CBasePlayer', 'm_flFallVelocity'); return (fv < -1 || fv > 1) }

function extrapolate_position(_0x4ccbx9f, _0x4ccbx8c, _0x4ccbxa0) { var _0x4ccbxa1 = Entity.GetProp(_0x4ccbxa0, 'DT_CSPlayer', 'm_vecVelocity[0]'); var _0x4ccbxa2 = [_0x4ccbx9f[0], _0x4ccbx9f[1], _0x4ccbx9f[2]]; for (var _0x4ccbx2a = 0; _0x4ccbx2a < _0x4ccbx8c; _0x4ccbx2a++) { _0x4ccbxa2[0] += (_0x4ccbxa1[0] * Globals.TickInterval());
        _0x4ccbxa2[1] += (_0x4ccbxa1[1] * Globals.TickInterval());
        _0x4ccbxa2[2] += (_0x4ccbxa1[2] * Globals.TickInterval() + (9.81 * ((Globals.TickInterval()) * (Globals.TickInterval()) / 2))) }; return _0x4ccbxa2 } UI.AddLabel('______________________________________');
UI.AddLabel('                Visuals               ');
UI.AddCheckbox('Predict targeted hitbox');
Render['FadedCircle'] = function (_0x4ccbx82, _0x4ccbx83, _0x4ccbxa3, _0x4ccbxa4) { const _0x4ccbxa5 = _0x4ccbxa4[3] / _0x4ccbxa3; for (var _0x4ccbx2a = 0; _0x4ccbx2a <= _0x4ccbxa3; _0x4ccbx2a++) { Render.FilledCircle(_0x4ccbx82, _0x4ccbx83, _0x4ccbx2a, [_0x4ccbxa4[0], _0x4ccbxa4[1], _0x4ccbxa4[2], _0x4ccbxa4[3] - _0x4ccbxa5 * _0x4ccbx2a]) } };

function radToDeg(_0x4ccbxa7) { return _0x4ccbxa7 * 180 / Math['PI'] }
var Cache = { values: [] };
Cache['InvokeCallback'] = function (_0x4ccbxa9, _0x4ccbxaa, _0x4ccbxab, _0x4ccbxac) { if (this['values'][_0x4ccbxa9] == null) { this['values'][_0x4ccbxa9] = null }; if (this['values'][_0x4ccbxa9] === _0x4ccbxaa) { return };
    this['values'][_0x4ccbxa9] = _0x4ccbxaa;
    _0x4ccbxab['apply'](null, _0x4ccbxac) };
var Targeting = { currentData: { target: null, hitbox: 0, last_hitbox: -1 }, hitboxMap: [6, 5, 4, 3, 2], weaponId: [[2, 3, 4, 30, 32, 36, 61, 63], [1, 64], [40], [9], [11, 38]], configuration: ['GENERAL', 'PISTOL', 'HEAVY PISTOL', 'SCOUT', 'AWP', 'AUTOSNIPER'], HITBOX: { "\x55\x4E\x53\x55\x52\x45": -1, "\x42\x4F\x44\x59": 3, "\x48\x45\x41\x44": 0 } };
Targeting['FindOptimalTarget'] = function () { const _0x4ccbxae = Entity.GetEnemies(); const _0x4ccbx59 = Entity.GetLocalPlayer(); if (!_0x4ccbx59 || !Entity.IsAlive(_0x4ccbx59)) { return null }; const _0x4ccbxaf = Entity.GetEyePosition(_0x4ccbx59); const _0x4ccbxb0 = Local.GetViewAngles(); var _0x4ccbxb1 = { fov: 180, id: null }; for (var _0x4ccbx2a = 0; _0x4ccbx2a < _0x4ccbxae['length']; _0x4ccbx2a++) { const _0x4ccbx92 = _0x4ccbxae[_0x4ccbx2a]; if (!Entity.IsAlive(_0x4ccbx92) || Entity.IsDormant(_0x4ccbx92)) { continue }; const _0x4ccbxb2 = Entity.GetHitboxPosition(_0x4ccbx92, 0); const _0x4ccbxb3 = [_0x4ccbxb2[0] - _0x4ccbxaf[0], _0x4ccbxb2[1] - _0x4ccbxaf[1], _0x4ccbxb2[2] - _0x4ccbxaf[2]]; const _0x4ccbxb4 = -radToDeg(Math['atan2'](_0x4ccbxb3[2], Math['sqrt'](_0x4ccbxb3[0] ** 2 + _0x4ccbxb3[1] ** 2))); const _0x4ccbxb5 = radToDeg(Math['atan2'](_0x4ccbxb3[1], _0x4ccbxb3[0])); const _0x4ccbxb6 = Math['abs'](_0x4ccbxb0[0] - _0x4ccbxb4); const _0x4ccbxb7 = Math['abs'](_0x4ccbxb0[1] % 360 - _0x4ccbxb5 % 360) % 360; const _0x4ccbxb8 = Math['sqrt'](_0x4ccbxb6 * _0x4ccbxb6 + _0x4ccbxb7 * _0x4ccbxb7); if (_0x4ccbxb8 < _0x4ccbxb1['fov']) { _0x4ccbxb1['fov'] = _0x4ccbxb8;
            _0x4ccbxb1['id'] = _0x4ccbx92 } }; return _0x4ccbxb1['id'] };
Targeting['GetNextTargetedHitbox'] = function (_0x4ccbx92) { if (!_0x4ccbx92) { return this['HITBOX']['UNSURE'] }; const _0x4ccbx59 = Entity.GetLocalPlayer(); const _0x4ccbx5a = Entity.GetWeapon(_0x4ccbx59); if (!_0x4ccbx59 || !_0x4ccbx5a) { return this['HITBOX']['UNSURE'] }; const _0x4ccbxaf = Entity.GetEyePosition(_0x4ccbx59); const _0x4ccbxb9 = Entity.GetProp(_0x4ccbx5a, 'CBaseAttributableItem', 'm_iItemDefinitionIndex') & 0xFFFF; const _0x4ccbxba = 'GENERAL'; for (var _0x4ccbx2a = 0; _0x4ccbx2a < this['weaponId']['length']; _0x4ccbx2a++) { for (var _0x4ccbxbb = 0; _0x4ccbxbb < this['weaponId'][_0x4ccbx2a]['length']; _0x4ccbxbb++) { if (this['weaponId'][_0x4ccbx2a][_0x4ccbxbb] === _0x4ccbxb9) { _0x4ccbxba = this['configuration'][_0x4ccbx2a + 1] } } }; const _0x4ccbxbc = UI.GetValue('Rage', _0x4ccbxba, 'Accuracy', 'Prefer body aim'); const _0x4ccbxbd = UI.GetValue('Rage', _0x4ccbxba, 'Targeting', 'Hitboxes') & (1 << 0); if (_0x4ccbxbc) { return this['HITBOX']['BODY'] }; if (!_0x4ccbxbd) { return this['HITBOX']['BODY'] }; const _0x4ccbxbe = Trace.Bullet(_0x4ccbx59, _0x4ccbx92, _0x4ccbxaf, Entity.GetHitboxPosition(_0x4ccbx92, 0)); const _0x4ccbxbf = Trace.Bullet(_0x4ccbx59, _0x4ccbx92, _0x4ccbxaf, Entity.GetHitboxPosition(_0x4ccbx92, 3)); const _0x4ccbx10 = Entity.GetProp(_0x4ccbx92, 'CBasePlayer', 'm_iHealth'); if (!_0x4ccbxbe[2] && this['currentData']['last_hitbox'] === 0) { if (_0x4ccbx10 < 25) { return this['HITBOX']['BODY'] }; return this['HITBOX']['HEAD'] };
    this['currentData']['last_hitbox'] = -1; if (_0x4ccbx10 < _0x4ccbxbf[1]) { return this['HITBOX']['BODY'] }; return this['HITBOX']['HEAD'] };

function hkCreateMove() { const _0x4ccbxc1 = UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Predict targeted hitbox'); if (!_0x4ccbxc1) { return }; const target = Targeting.FindOptimalTarget(); const _0x4ccbxc3 = Targeting.GetNextTargetedHitbox(target);
    Targeting['currentData']['target'] = target;
    Targeting['currentData']['hitbox'] = _0x4ccbxc3 }

function hkRagebotFire() { const _0x4ccbxc1 = UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Predict targeted hitbox'); if (!_0x4ccbxc1) { return }; const target = Event.GetInt('target_index'); if (target !== Targeting['currentData']['target']) { return };
    Targeting['currentData']['last_hitbox'] = Event.GetInt('hitbox') }

function hkDraw() { const _0x4ccbxc1 = UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Predict targeted hitbox'); if (!_0x4ccbxc1) { return }; const _0x4ccbx59 = Entity.GetLocalPlayer(); if (!_0x4ccbx59 || !Entity.IsAlive(_0x4ccbx59)) { return }; if (!Targeting['currentData']['target'] || !Entity.IsAlive(Targeting['currentData']['target']) || Targeting['currentData']['hitbox'] < 0) { return }; const _0x4ccbxc6 = Render.WorldToScreen(Entity.GetHitboxPosition(Targeting['currentData']['target'], Targeting['currentData']['hitbox'])); const _0x4ccbxc7 = Render.GetScreenSize(); if (!_0x4ccbxc6) { return }; if (_0x4ccbxc6[0] < 0 || _0x4ccbxc6[0] > _0x4ccbxc7[0] || _0x4ccbxc6[1] < 0 || _0x4ccbxc6[1] > _0x4ccbxc7[1]) { return };
    Render.FadedCircle(_0x4ccbxc6[0], _0x4ccbxc6[1], 14, [142, 101, 252, 75]) } Cheat.RegisterCallback('CreateMove', 'hkCreateMove');
Cheat.RegisterCallback('Draw', 'hkDraw');
Cheat.RegisterCallback('ragebot_fire', 'hkRagebotFire');
UI.AddCheckbox('Watermark');
var username = '';
UI.AddColorPicker('Theme color');

function waterdraw() { if (UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'Watermark')) { if (!World.GetServerString()) { return }; var _0x4ccbxca = new Date();
        username = Cheat.GetUsername(); var _0x4ccbxcb = _0x4ccbxca['getHours'](); var _0x4ccbxcc = _0x4ccbxca['getMinutes'](); var _0x4ccbxcd = _0x4ccbxca['getSeconds'](); var _0x4ccbxce = _0x4ccbxcb <= 9 ? '0' + _0x4ccbxca['getHours']() + ':' : _0x4ccbxca['getHours']() + ':'; var _0x4ccbxcf = _0x4ccbxcc <= 9 ? '0' + _0x4ccbxca['getMinutes']() + ':' : _0x4ccbxca['getMinutes']() + ':'; var _0x4ccbxd0 = _0x4ccbxcd <= 9 ? '0' + _0x4ccbxca['getSeconds']() : _0x4ccbxca['getSeconds'](); var _0x4ccbxd1 = World.GetServerString(); var _0x4ccbxd2 = Math['floor'](Global.Latency() * 1000 / 1.5); var _0x4ccbxa4 = UI.GetColor('Misc', 'JAVASCRIPT', 'Script items', 'Theme color'); var _0x4ccbx8 = Render.AddFont('Verdana', 7, 400); var _0x4ccbxd3 = 'Edward03.js (1.0) | ' + Cheat.GetUsername() + ' | delay: ' + Math['round'](Entity.GetProp(Entity.GetLocalPlayer(), 'CPlayerResource', 'm_iPing'))
            .toString() + 'ms | ' + Globals.Tickrate()
            .toString() + 'tick | ' + _0x4ccbxce + _0x4ccbxcf + _0x4ccbxd0; var _0x4ccbxd4 = 18; var _0x4ccbxd5 = Render.TextSizeCustom(_0x4ccbxd3, _0x4ccbx8)[0] + 8; var _0x4ccbx82 = Global.GetScreenSize()[0]; var _0x4ccbx83 = 10;
        _0x4ccbx82 = _0x4ccbx82 - _0x4ccbxd5 - 10;
        Render.FilledRect(_0x4ccbx82, _0x4ccbx83, _0x4ccbxd5, 2, [_0x4ccbxa4[0], _0x4ccbxa4[1], _0x4ccbxa4[2], _0x4ccbxa4[3]]);
        Render.FilledRect(_0x4ccbx82, _0x4ccbx83 + 2, _0x4ccbxd5, _0x4ccbxd4, [15, 15, 15, 0]);
        Render.StringCustom(_0x4ccbx82 + 4, _0x4ccbx83 + 4, 0, _0x4ccbxd3, [255, 255, 255, 255], _0x4ccbx8) } } Cheat.RegisterCallback('Draw', 'waterdraw');
UI.AddLabel('             HITLOGS');
UI.AddCheckbox('INCHAT LOGS');
hitboxes = ['generic', 'head', 'chest', 'stomach', 'left arm', 'right arm', 'left leg', 'right leg', '?'];
var scriptitems = ('Misc', 'JAVASCRIPT', 'Script items');
var shots = 0;
var predicthc = 0;
var safety = 0;
var hitboxName = '';
var choked = 0;
var exploit = 0;
var logs = [];
var logsct = [];
var logsalpha = [];

function getHitboxName(_0x4ccbx4) { switch (_0x4ccbx4) {
    case 0:
        hitboxName = 'head'; break;
    case 1:
        hitboxName = 'head'; break;
    case 2:
        hitboxName = 'stomach'; break;
    case 3:
        hitboxName = 'stomach'; break;
    case 4:
        hitboxName = 'stomach'; break;
    case 5:
        hitboxName = 'chest'; break;
    case 6:
        hitboxName = 'chest'; break;
    case 7:
        hitboxName = 'left leg'; break;
    case 8:
        hitboxName = 'right leg'; break;
    case 9:
        hitboxName = 'left leg'; break;
    case 10:
        hitboxName = 'right leg'; break;
    case 11:
        hitboxName = 'left leg'; break;
    case 12:
        hitboxName = 'right leg'; break;
    case 13:
        hitboxName = 'left arm'; break;
    case 14:
        hitboxName = 'right arm'; break;
    case 15:
        hitboxName = 'left arm'; break;
    case 16:
        hitboxName = 'left arm'; break;
    case 17:
        hitboxName = 'right arm'; break;
    case 18:
        hitboxName = 'right arm'; break;
    default:
        hitboxName = 'body' }; return hitboxName }

function HitgroupName(_0x4ccbx4) { return hitboxes[_0x4ccbx4] || 'body' }
var target = -1;
var shots_fired = 0;
var hits = 0;
var lastUpdate = 0;
var logged = false;

function ragebot_fire() { predicthc = Event.GetInt('hitchance');
    safety = Event.GetInt('safepoint');
    hitboxName = getHitboxName(Event.GetInt('hitbox'));
    exploit = (Event.GetInt('exploit') + 1)
        .toString();
    target = Event.GetInt('target_index');
    shots_fired++;
    logged = false;
    lastUpdate = Globals.Curtime() }

function hitlog() { var _0x4ccbxe6 = Entity.GetEntityFromUserID(Event.GetInt('userid')); var _0x4ccbxe7 = Entity.GetEntityFromUserID(Event.GetInt('attacker')); if (_0x4ccbxe7 == Entity.GetLocalPlayer() && _0x4ccbxe6 == target) { hits++ }; var _0x4ccbxe8 = 'Hit ';
    me = Entity.GetLocalPlayer();
    hitbox = Event.GetInt('hitgroup');
    target_damage = Event.GetInt('dmg_health');
    target_health = Event.GetInt('health');
    victim = Event.GetInt('userid');
    _0x4ccbxe7 = Event.GetInt('attacker');
    weapon = Event.GetString('weapon');
    victimIndex = Entity.GetEntityFromUserID(victim);
    attackerIndex = Entity.GetEntityFromUserID(_0x4ccbxe7);
    name = Entity.GetName(victimIndex); var _0x4ccbxe9 = Globals.Tickcount() % 17; var _0x4ccbxea = ''; if (exploit == 2) { _0x4ccbxea += 'T' };
    _0x4ccbxea += 'B'; if (hitbox == 1) { _0x4ccbxea += 'H' }; if (safety == 1) { safety = 'true' } else { safety = 'false' }; if (weapon == 'hegrenade') { _0x4ccbxe8 = 'Naded ' } else { if (weapon == 'inferno') { _0x4ccbxe8 = 'Burned ' } else { if (weapon == 'knife') { _0x4ccbxe8 = 'Knifed ' } } }; if (me == attackerIndex && me != victimIndex) { Cheat.PrintColor([203, 155, 66, 255], '[Edward03] '); if (_0x4ccbxe8 == 'Hit ') { if (UI.GetValue('Script items', 'INCHAT LOGS')) { Cheat.PrintChat(' \x08[\x0CEdward03\x08] [\x0C' + shots.toString() + '\x08] ' + _0x4ccbxe8 + name + '\'s \x10' + HitgroupName(hitbox) + '\x08 for \x07' + target_damage.toString() + '\x08 (' + target_health.toString() + ' remaining) aimed=\x10' + hitboxName + '\x08(' + predicthc.toString() + '%%) safety=\x03' + safety + '\x08 (\x10' + _0x4ccbxea + '\x08) (\x10' + _0x4ccbxe9 + '\x08:\x10' + exploit + '\x08)\x0A') };
            Cheat.Print('[' + shots.toString() + '] ' + _0x4ccbxe8 + name + '\'s ' + HitgroupName(hitbox) + ' for ' + target_damage.toString() + ' (' + target_health.toString() + ' health remaining) aimed=' + hitboxName + '(' + predicthc.toString() + '%%) safety=' + safety + ' (' + _0x4ccbxea + ') (' + _0x4ccbxe9 + ':' + exploit + ')\x0A');
            logs['push']('[' + shots.toString() + '] ' + _0x4ccbxe8 + name + '\'s ' + HitgroupName(hitbox) + ' for ' + target_damage.toString() + ' (' + target_health.toString() + ' health remaining) aimed=' + hitboxName + '(' + predicthc.toString() + '%%) safety=' + safety + ' (' + _0x4ccbxea + ') (' + _0x4ccbxe9 + ':' + exploit + ')') } else { Cheat.Print('[' + shots.toString() + '] ' + _0x4ccbxe8 + name + '\'s ' + HitgroupName(hitbox) + ' for ' + target_damage.toString() + ' (' + target_health.toString() + ' health remaining) \x0A');
            logs['push']('[' + shots.toString() + '] ' + _0x4ccbxe8 + name + '\'s ' + HitgroupName(hitbox) + ' for ' + target_damage.toString() + ' (' + target_health.toString() + ' health remaining)') };
        logsct['push'](Globals.Curtime());
        logsalpha['push'](255) }; if (shots == 99) { shots = 0 } else { shots++ } }

function removelogs() { if (logs['length'] > 6) { logs['shift']();
        logsct['shift']();
        logsalpha['shift']() }; if (logsct[0] + 6.5 < Globals.Curtime()) { logsalpha[0] -= Globals.Frametime() * 600; if (logsalpha[0] < 0) { logs['shift']();
            logsct['shift']();
            logsalpha['shift']() } } }

function item_purchase() { Cheat.PrintColor([89, 119, 239, 255], '[Edward03] ');
    Cheat.Print(Entity.GetName(Entity.GetEntityFromUserID(Event.GetInt('userid'))) + ' bought ' + Event.GetString('weapon') + '\x0A');
    logs['push'](Entity.GetName(Entity.GetEntityFromUserID(Event.GetInt('userid'))) + ' bought ' + Event.GetString('weapon') + '');
    logsct['push'](Globals.Curtime());
    logsalpha['push'](255) }

function onDraw() { if (!World.GetServerString()) { return }; var _0x4ccbx8 = Render.AddFont('Lucida Console', 8, 0); for (i = 0; i < logs['length']; i++) { Render.StringCustom(4, 4 + 13 * i, 0, logs[i], [0, 0, 0, logsalpha[i]], _0x4ccbx8);
        Render.StringCustom(3, 3 + 13 * i, 0, logs[i], [255, 255, 255, logsalpha[i]], _0x4ccbx8) }; if (shots_fired > hits && (Globals.Curtime() - lastUpdate > 0.33)) { if (Globals.Curtime() - lastUpdate > 1) { shots_fired = 0;
            hits = 0 }; if (!logged) { var _0x4ccbxe9 = Globals.Tickcount() % 16;
            logged = true; var _0x4ccbxee = 'true'; var _0x4ccbxef = '?'; if (safety == 0) { _0x4ccbxee = 'false' }; if (Entity.IsAlive(target) == false) { _0x4ccbxef = 'death' } else { if (Entity.IsAlive(Entity.GetLocalPlayer()) == false) { _0x4ccbxef = 'dead' } else { if (safety == true && predicthc < 76) { _0x4ccbxef = 'spread' } else { if (safety == true && predicthc > 76) { _0x4ccbxef = 'prediction error' } } } }; var _0x4ccbxea = ''; if (exploit == 2) { _0x4ccbxea += 'T' };
            _0x4ccbxea += 'B';
            Cheat.PrintColor([184, 74, 74, 255], '[Edward03] ');
            Cheat.Print('[' + shots.toString() + '] ' + 'Missed ' + Entity.GetName(target) + '\'s ' + hitboxName + '(' + predicthc.toString() + '%%) due to ' + _0x4ccbxef + ', safety=' + _0x4ccbxee + ' (' + _0x4ccbxea + ') (' + _0x4ccbxe9 + ':' + exploit + ')\x0A');
            logs['push']('[' + shots.toString() + '] ' + 'Missed ' + Entity.GetName(target) + '\'s ' + hitboxName + '(' + predicthc.toString() + '%%) due to ' + _0x4ccbxef + ', safety=' + _0x4ccbxee + ' (' + _0x4ccbxea + ') (' + _0x4ccbxe9 + ':' + exploit + ')'); if (UI.GetValue('Script items', 'INCHAT LOGS')) { Cheat.PrintChat(' \x08[\x0CEdward03\x08] [\x0C' + shots.toString() + '\x08] ' + '\x08Missed ' + Entity.GetName(target) + '\'s \x10' + hitboxName + '\x08(' + predicthc.toString() + '%%) due to \x07' + _0x4ccbxef + '\x08, safety=\x03' + _0x4ccbxee + '\x08 (\x10' + _0x4ccbxea + '\x08) (\x10' + _0x4ccbxe9 + '\x08:\x10' + exploit + '\x08)') };
            logsct['push'](Globals.Curtime());
            logsalpha['push'](255); if (shots == 99) { shots = 0 } else { shots++ } } } }

function main() { Global.RegisterCallback('ragebot_fire', 'ragebot_fire');
    Global.RegisterCallback('item_purchase', 'item_purchase');
    Global.RegisterCallback('player_hurt', 'hitlog');
    Global.RegisterCallback('Draw', 'onDraw');
    Global.RegisterCallback('Draw', 'removelogs') } main();
UI.AddLabel('______________________________________');
var keybinds = [];
keybinds['push']({ path: ['Rage', 'Exploits', 'Hide shots'], name: 'HS' });
keybinds['push']({ path: ['Rage', 'GENERAL', 'Exploits', 'Doubletap'], name: 'DT' });
keybinds['push']({ path: ['Rage', 'GENERAL', 'Force body aim'], name: 'BAIM' });
keybinds['push']({ path: ['Anti-Aim', 'Fake angles', 'Inverter'], name: 'Inverter' });
keybinds['push']({ path: ['Rage', 'GENERAL', 'Force safe point'], name: 'Safepoint' });
keybinds['push']({ path: ['Misc', 'Movement', 'Auto peek'], name: 'Auto Peek' });
keybinds['push']({ path: ['Anti-Aim', 'Extra', 'Slow walk'], name: 'Slow Walk' });
keybinds['push']({ path: ['Anti-Aim', 'Extra', 'Fake duck'], name: 'Fake Duck' });
keybinds['push']({ path: ['Misc', 'JAVASCRIPT', 'Scout Override'], name: 'Damage Override' });
keybinds['push']({ path: ['Misc', 'JAVASCRIPT', 'Freestand'], name: 'Freestanding' });
const print = function (_0x4ccbxd3, _0x4ccbxa4) { if (_0x4ccbxa4 == undefined) { Cheat.Print(_0x4ccbxd3.toString() + '\x0A') } else { Cheat.PrintColor(_0x4ccbxa4, _0x4ccbxd3.toString() + '\x0A') } };
const getval = function (_0x4ccbx4e) { return UI.GetValue('Script items', _0x4ccbx4e) };
const setval = function (_0x4ccbx4e, _0x4ccbx4c) { return UI.SetValue('Script items', _0x4ccbx4e, _0x4ccbx4c) };
const getcol = function (_0x4ccbx4e) { return UI.GetColor('Script items', _0x4ccbx4e) };
const get_active_keybinds = function () { var _0x4ccbxf7 = []; for (var _0x4ccbx2a in keybinds) { if (UI['IsHotkeyActive']['apply'](null, keybinds[_0x4ccbx2a]['path'])) { _0x4ccbxf7['push'](keybinds[_0x4ccbx2a]['name']) } }; return _0x4ccbxf7 };
const get_spectators = function () { const _0x4ccbxae = Entity.GetPlayers(); var _0x4ccbxf9 = []; for (var _0x4ccbx2a = 0; _0x4ccbx2a < _0x4ccbxae['length']; _0x4ccbx2a++) { const _0x4ccbxfa = Entity.GetProp(_0x4ccbxae[_0x4ccbx2a], 'CBasePlayer', 'm_hObserverTarget'); if (_0x4ccbxfa !== 'm_hObserverTarget') { if (_0x4ccbxfa === Entity.GetLocalPlayer()) { const _0x4ccbx4e = Entity.GetName(_0x4ccbxae[_0x4ccbx2a]);
                _0x4ccbxf9['push'](_0x4ccbx4e['length'] >= 22 ? _0x4ccbx4e['substr'](0, 20) + '...' : _0x4ccbx4e) } } }; return _0x4ccbxf9 };
const point_in_rect = function (_0x4ccbx9f, _0x4ccbx3c, _0x4ccbx3d, _0x4ccbx91) { if (_0x4ccbx91) { if (_0x4ccbx9f[0] > _0x4ccbx3c[0] && _0x4ccbx9f[1] > _0x4ccbx3c[1] && _0x4ccbx9f[0] < _0x4ccbx3d[0] && _0x4ccbx9f[1] < _0x4ccbx3d[1]) { Render.Rect(_0x4ccbx3c[0], _0x4ccbx3c[1], _0x4ccbx3d[0] - _0x4ccbx3c[0], _0x4ccbx3d[1] - _0x4ccbx3c[1], [0, 255, 0, 255]) } else { Render.Rect(_0x4ccbx3c[0], _0x4ccbx3c[1], _0x4ccbx3d[0] - _0x4ccbx3c[0], _0x4ccbx3d[1] - _0x4ccbx3c[1], [255, 0, 0, 255]) } }; return _0x4ccbx9f[0] > _0x4ccbx3c[0] && _0x4ccbx9f[1] > _0x4ccbx3c[1] && _0x4ccbx9f[0] < _0x4ccbx3d[0] && _0x4ccbx9f[1] < _0x4ccbx3d[1] };
const get_dropdown_value = function (_0x4ccbx4c, _0x4ccbx4) { const _0x4ccbxfd = 1 << _0x4ccbx4; return _0x4ccbx4c & _0x4ccbxfd ? true : false };
Cheat.Print('\x0ALoaded ');
Cheat.PrintColor([255, 0, 0, 255], keybinds['length'] + ' ');
print('keybinds!\x0A');
print('HAHAH:');
Cheat.PrintColor([255, 255, 0, 255], 'keybinds.push({path: ["Legit", "Triggerbot", "Enabled"], name: "Trigger bot"}); ');
print('EZ.');
const screen_size = Global.GetScreenSize();
const render_container = function (_0x4ccbxff, _0x4ccbx100, _0x4ccbxd5, _0x4ccbxd4, _0x4ccbx4e, _0x4ccbx101, _0x4ccbx102, _0x4ccbx8, _0x4ccbx103, _0x4ccbxaa, _0x4ccbx104) { if (getval(_0x4ccbx4e + '_x') <= 0) { UI.AddCheckbox(_0x4ccbx4e + ' stored');
        UI.AddSliderInt(_0x4ccbx4e + '_x', 1, screen_size[0]);
        UI.AddSliderInt(_0x4ccbx4e + '_y', 1, screen_size[0]);
        UI.AddSliderInt(_0x4ccbx4e + '_x_off', 1, screen_size[0]);
        UI.AddSliderInt(_0x4ccbx4e + '_y_off', 1, screen_size[0]);
        setval(_0x4ccbx4e + '_x', _0x4ccbxff);
        setval(_0x4ccbx4e + '_y', _0x4ccbx100);
        UI.SetEnabled('Script items', _0x4ccbx4e + ' stored', false);
        UI.SetEnabled('Script items', _0x4ccbx4e + '_x', false);
        UI.SetEnabled('Script items', _0x4ccbx4e + '_y', false);
        UI.SetEnabled('Script items', _0x4ccbx4e + '_x_off', false);
        UI.SetEnabled('Script items', _0x4ccbx4e + '_y_off', false) }; const _0x4ccbx105 = Input.GetCursorPosition(); if (UI.IsMenuOpen() && Input.IsKeyPressed(0x1)) { if (point_in_rect(_0x4ccbx105, [getval(_0x4ccbx4e + '_x'), getval(_0x4ccbx4e + '_y')], [getval(_0x4ccbx4e + '_x') + _0x4ccbxd5, getval(_0x4ccbx4e + '_y') + _0x4ccbxd4])) { if (getval(_0x4ccbx4e + ' stored') == 0) { setval(_0x4ccbx4e + '_x_off', _0x4ccbx105[0] - getval(_0x4ccbx4e + '_x'));
                setval(_0x4ccbx4e + '_y_off', _0x4ccbx105[1] - getval(_0x4ccbx4e + '_y'));
                setval(_0x4ccbx4e + ' stored', 1) };
            setval(_0x4ccbx4e + '_x', _0x4ccbx105[0] - getval(_0x4ccbx4e + '_x_off'));
            setval(_0x4ccbx4e + '_y', _0x4ccbx105[1] - getval(_0x4ccbx4e + '_y_off')) } } else { if (getval(_0x4ccbx4e + ' stored')) { setval(_0x4ccbx4e + ' stored', 0) } };
    x = getval(_0x4ccbx4e + '_x');
    y = getval(_0x4ccbx4e + '_y');
    Render.GradientRect(x, y, _0x4ccbxd5, 2, 1, _0x4ccbx101, _0x4ccbx102);
    Render.GradientRect(x + 1, y + 2, _0x4ccbxd5 - 2, _0x4ccbxd4, 0, [0, 0, 0, 125], [0, 0, 0, 0]); const _0x4ccbx106 = Render.TextSizeCustom(_0x4ccbx4e, _0x4ccbx8);
    Render.FilledCircle(x + 12, y + 12, _0x4ccbx106[1] / 2 + 1, [20, 20, 20, 255]);
    Render.FilledCircle(x + 12 + _0x4ccbx106[0], y + 12, _0x4ccbx106[1] / 2 + 1, [20, 20, 20, 255]);
    Render.FilledRect(x + 12, y + 6, _0x4ccbx106[0], _0x4ccbx106[1] + 1, [20, 20, 20, 255]);
    Render.StringCustom(x + 13, y + 6, 0, _0x4ccbx4e, [255, 255, 255, 255], _0x4ccbx8);
    Render.StringCustom(x + _0x4ccbxd5 - 27, y + 6, 0, '<', [255, 255, 255, 255], _0x4ccbx8);
    Render.FilledCircle(x + _0x4ccbxd5 - 14, y + 12, 6, [20, 20, 20, 100]);
    Render.StringCustom(x + _0x4ccbxd5 - 16, y + 5, 0, 'x', [255, 255, 255, 255], _0x4ccbx8); const _0x4ccbx107 = Render.TextSizeCustom(_0x4ccbxaa, _0x4ccbx8); for (var _0x4ccbx2a in _0x4ccbx103) { if (_0x4ccbx104 != null) { const _0x4ccbx107 = Render.TextSizeCustom(_0x4ccbx104[_0x4ccbx2a], _0x4ccbx8);
            _0x4ccbxaa = _0x4ccbx104[_0x4ccbx2a] };
        Render.StringCustom(x + 10, y + 25 + (_0x4ccbx2a * 13), 0, _0x4ccbx103[_0x4ccbx2a], [255, 255, 255, 255], _0x4ccbx8);
        Render.StringCustom(x + _0x4ccbxd5 - _0x4ccbx107[0] - 15, y + 25 + (_0x4ccbx2a * 13), 0, '[' + _0x4ccbxaa + ']', [255, 255, 255, 255], _0x4ccbx8) } };
UI.AddMultiDropdown('Windows', ['Hotkeys', 'Spectator list', 'Watermark']);
UI.AddCheckbox('Show windows only with information');
UI.AddColorPicker('Gradient color 1');
UI.AddColorPicker('Gradient color 2');
const watermark = [Cheat.GetUsername()['length'] > 14 ? Cheat.GetUsername()['substr'](0, 14) + '...' : Cheat.GetUsername(), World.GetServerString() != '' ? World.GetServerString() : 'unknown', Math['round'](Local.Latency() * 1000 - 16)
    .toString(), Globals.Tickrate()
    .toString()];
const watermark_custom = ['user', 'server', 'latency', 'tickrate'];
const for_test = ['Idet negr', 'vidit dom stoit', 'konec prikola'];
const main = function () { const _0x4ccbx8 = Render.AddFont('Verdana', 7, 300); if (get_dropdown_value(getval('Windows'), 0)) { const _0x4ccbx10b = get_active_keybinds(); if (!(_0x4ccbx10b['length'] <= 0 && getval('Show windows only with information'))) { render_container(300, 300, 150, 25, 'keybinds', getcol('Gradient color 1'), getcol('Gradient color 2'), _0x4ccbx8, _0x4ccbx10b, 'on') } }; if (get_dropdown_value(getval('Windows'), 1)) { const _0x4ccbxf9 = get_spectators(); if (!(_0x4ccbxf9['length'] <= 0 && getval('Show windows only with information'))) { render_container(300, 450, 200, 25, 'Spectators', getcol('Gradient color 1'), getcol('Gradient color 2'), _0x4ccbx8, _0x4ccbxf9, 'spectate') } }; if (get_dropdown_value(getval('Windows'), 2)) { render_container(300, 700, 150, 25, 'Edward03', getcol('Gradient color 1'), getcol('Gradient color 2'), _0x4ccbx8, watermark_custom, 'on', watermark) }; if (getval('Render test container')) { render_container(300, 100, 150, 25, 'Test Container', getcol('Gradient color 1'), getcol('Gradient color 2'), _0x4ccbx8, for_test, 'funny') } };
Cheat.RegisterCallback('Draw', 'main');
UI.AddLabel('______________________________________');
UI.AddLabel('               Misc                   ');
var a = UI.AddSliderInt('Turn speed', 0, 500);

function d() { UI.SetValue('Misc', 'GENERAL', 'Movement', 'Turn speed', UI['GetValue']['apply'](null, a)) } Cheat.RegisterCallback('Draw', 'd');
UI.AddCheckbox('Team based gloves');
UI.AddDropdown('CT Gloves', ['None', 'Bloodhound', 'Sporty', 'Slick', 'Handwrap', 'Motorcycle', 'Specialist']);
UI.AddDropdown('T Gloves', ['None', 'Bloodhound', 'Sporty', 'Slick', 'Handwrap', 'Motorcycle', 'Specialist']);
UI.AddCheckbox('Team based knife');
UI.AddDropdown('CT Knife', ['None', 'Bayonet', 'Flip knife', 'Gut knife', 'Karambit', 'M9 bayonet', 'Butterfly', 'Falchion', 'Navaja', 'Shadow daggers', 'Stiletto', 'Bowie', 'Huntsman', 'Talon', 'Ursus', 'Classic', 'Paracord', 'Survival', 'Nomad', 'Skeleton']);
UI.AddDropdown('T Knife', ['None', 'Bayonet', 'Flip knife', 'Gut knife', 'Karambit', 'M9 bayonet', 'Butterfly', 'Falchion', 'Navaja', 'Shadow daggers', 'Stiletto', 'Bowie', 'Huntsman', 'Talon', 'Ursus', 'Classic', 'Paracord', 'Survival', 'Nomad', 'Skeleton']);
UI.AddCheckbox('Team based model');
UI.AddDropdown('CT Model', ['None', '\'TwoTimes\' McCoy', 'Seal Team 6 Soldier', 'Buckshot', 'Lt. Commander Ricksaw', 'Dragomir', 'Rezan The Ready', 'Maximus', 'Blackwolf', 'The Doctor\' Romanow', '8 Squadron Officer', '3rd Commando Company', 'Special Agent Ava', 'Operator', 'Markus Delrow', 'Michael Syfers', 'Enforcer', 'Slingshot', 'Soldier', 'The Elite Mr. Muhlik', 'Ground Rebel', 'Osiris', 'Prof. Shahmat', 'Heavy armor']);
UI.AddDropdown('T Model', ['None', '\'TwoTimes\' McCoy', 'Seal Team 6 Soldier', 'Buckshot', 'Lt. Commander Ricksaw', 'Dragomir', 'Rezan The Ready', 'Maximus', 'Blackwolf', 'The Doctor\' Romanow', '8 Squadron Officer', '3rd Commando Company', 'Special Agent Ava', 'Operator', 'Markus Delrow', 'Michael Syfers', 'Enforcer', 'Slingshot', 'Soldier', 'The Elite Mr. Muhlik', 'Ground Rebel', 'Osiris', 'Prof. Shahmat', 'Heavy armor']);

function onFSN() { if (Cheat.FrameStage() != 2) { return }; var _0x4ccbx10e = Entity.GetProp(Entity.GetLocalPlayer(), 'DT_BaseEntity', 'm_iTeamNum'); if (UI.GetValue('Script items', 'Team based gloves')) { UI.SetEnabled('Script items', 'CT Gloves', true);
        UI.SetEnabled('Script items', 'T Gloves', true); if (_0x4ccbx10e == 2) { UI.SetValue('Misc', 'SKINS', 'Gloves', 'Glove model', UI.GetValue('Script items', 'T Gloves')) }; if (_0x4ccbx10e == 3) { UI.SetValue('Misc', 'SKINS', 'Gloves', 'Glove model', UI.GetValue('Script items', 'CT Gloves')) } } else { UI.SetEnabled('Script items', 'CT Gloves', false);
        UI.SetEnabled('Script items', 'T Gloves', false) }; if (UI.GetValue('Script items', 'Team based knife')) { UI.SetEnabled('Script items', 'CT Knife', true);
        UI.SetEnabled('Script items', 'T Knife', true); if (_0x4ccbx10e == 2) { UI.SetValue('Misc', 'SKINS', 'Knife', 'Knife model', UI.GetValue('Script items', 'T Knife')) }; if (_0x4ccbx10e == 3) { UI.SetValue('Misc', 'SKINS', 'Knife', 'Knife model', UI.GetValue('Script items', 'CT Knife')) } } else { UI.SetEnabled('Script items', 'CT Knife', false);
        UI.SetEnabled('Script items', 'T Knife', false) }; if (UI.GetValue('Script items', 'Team based model')) { UI.SetEnabled('Script items', 'CT Model', true);
        UI.SetEnabled('Script items', 'T Model', true); if (_0x4ccbx10e == 2) { UI.SetValue('Misc', 'SKINS', 'Player', 'Player model', UI.GetValue('Script items', 'T Model')) }; if (_0x4ccbx10e == 3) { UI.SetValue('Misc', 'SKINS', 'Player', 'Player model', UI.GetValue('Script items', 'CT Model')) } } else { UI.SetEnabled('Script items', 'CT Model', false);
        UI.SetEnabled('Script items', 'T Model', false) } } Cheat.RegisterCallback('FrameStageNotify', 'onFSN');
UI.AddCheckbox('Fix zoom sensitivity');

function zoomfix() { if (Cheat.FrameStage() == 5) { var _0x4ccbx110 = Convar.GetFloat('zoom_sensitivity_ratio_mouse'); if (UI.GetValue('Misc', 'JAVASCRIPT', 'Scipt items', 'Fix zoom sensitivity')) { var _0x4ccbx111 = Convar.GetFloat('sensitivity'); var _0x4ccbx112 = UI.GetValue('Visual', 'WORLD', 'View', 'Field of view'); var _0x4ccbx113 = _0x4ccbx112 / 100 * _0x4ccbx111; if (_0x4ccbx110 != _0x4ccbx113) { Cheat.ExecuteCommand('zoom_sensitivity_ratio_mouse ' + _0x4ccbx113);
                Cheat.ExecuteCommand('zoom_sensitivity_ratio_joystick ' + _0x4ccbx113) } } else { if (_0x4ccbx110 != 1.0) { Cheat.ExecuteCommand('zoom_sensitivity_ratio_mouse ' + 1.0);
                Cheat.ExecuteCommand('zoom_sensitivity_ratio_joystick ' + 1.0) } } } } Cheat.RegisterCallback('FrameStageNotify', 'zoomfix')
function clamp(v, min, max)
{
    return Math.max(Math.min(v, max), min);
}

function get(element)
{
    return UI.GetValue("Misc", "JAVASCRIPT", "Script items", element);
}

function render_effect()
{
    if (alpha === 0)
        return;

    const inc_alpha = ((1 / get("Effect duration")) * Global.Frametime()) * 255
    const inc_size = ((1 / get("Effect duration")) * Global.Frametime()) * 360

    alpha = clamp(alpha - inc_alpha, 0, 255);
    size = clamp(size - inc_size, 0, 360);

    const x = Global.GetScreenSize()[0], y = Global.GetScreenSize()[1];

    Render.GradientRect(0, 0, x, size, 0, [128, 195, 255, alpha], [128, 195, 255, 0]);
    Render.GradientRect(0, y - size, x, size, 0, [128, 195, 255, 0], [128, 195, 255, alpha]);
    Render.GradientRect(x - size, 0, size, y, 1, [128, 195, 255, 0], [128, 195, 255, alpha]);
    Render.GradientRect(0, 0, size, y, 1, [128, 195, 255, alpha], [128, 195, 255, 0]);
}

function on_death()
{
    const attacker = Entity.GetEntityFromUserID(Event.GetInt("attacker"));
    const userid = Entity.GetEntityFromUserID(Event.GetInt("userid"));
    const player = Entity.GetLocalPlayer();

    if (attacker === player && userid != player)
    {
        alpha = 255;
        size = 360;
    }
}

Global.RegisterCallback("player_death", "on_death");
Global.RegisterCallback("Draw", "render_effect");

